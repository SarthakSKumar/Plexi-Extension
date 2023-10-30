import browser from "webextension-polyfill";
import { useEffect, useState } from "react";
import SignIn from "./screens/SignIn";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [session, setSession] = useState(null);
  const [screen, setScreen] = useState("facts");
  const [error, setError] = useState("");

  async function getSession() {
    const {
      data: { session },
    } = await browser.runtime.sendMessage({ action: "getSession" });
    setSession(session);
  }

  useEffect(() => {
    const storedSession = localStorage.getItem("session");
    if (storedSession) {
      setSession(JSON.parse(storedSession));
    } else {
      getSession();
    }
  }, []);
  async function handleOnClick() {
    setLoading(true);
    const { data } = await browser.runtime.sendMessage({ action: "fetch" });
    setLoading(false);
  }

  async function handleSignUp(email, password) {
    await browser.runtime.sendMessage({
      action: "signup",
      value: { email, password },
    });
    setScreen("signin");
  }
  async function handleSignIn(email, password) {
    const { data, error } = await browser.runtime.sendMessage({
      action: "signin",
      value: { email, password },
    });

    if (error) {
      setError(error.message);
    } else {
      // Store the session in localStorage after successful sign-in
      localStorage.setItem("session", JSON.stringify(data.session));

      // Set the session in the state
      setSession(data.session);
    }
  }

  async function handleSignOut() {
    // Clear the session from storage
    localStorage.removeItem("session");

    // Call the signout action
    const signOutResult = await browser.runtime.sendMessage({
      action: "signout",
    });

    setScreen("signin");
    setSession(signOutResult.data);
  }

  function renderApp() {
    if (!session) {
      if (screen === "signup") {
        return (
          <SignIn
            onSignIn={handleSignUp}
            title={"Sign Up"}
            onScreenChange={() => {
              setScreen("signin");
              setError("");
            }}
            helpText={"Got an account? Sign in"}
            error={error}
          />
        );
      }
      return (
        <SignIn
          title="Sign In"
          onSignIn={handleSignIn}
          onScreenChange={() => {
            setScreen("signup");
            setError("");
          }}
          helpText={"Create an account"}
          error={error}
        />
      );
    }

    return (
      <>
        <button
          className="px-4 py-2 font-semibold text-sm bg-black text-white rounded-full shadow-sm disabled:opacity-75 w-48"
          disabled={loading}
          onClick={handleOnClick}
        >
          Welcome
        </button>
        <div>
          <a className="text-cyan-400" onClick={handleSignOut}>
            Sign out
          </a>
        </div>
      </>
    );
  }

  return (
    <div className="">
      <div className="flex flex-col gap-4 p-4 shadow-sm bg-black w-96 rounded-md">
        <h1>plexi</h1>
        {renderApp()}
      </div>
    </div>
  );
};
export default App;
