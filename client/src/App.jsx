import { useEffect, useState } from "react";

import SignIn from "./components/screens/SignIn";
import SignUp from "./components/screens/SignUp";
import Home from "./components/screens/Home";

import "@fontsource-variable/hanken-grotesk";
import browser from "webextension-polyfill";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [session, setSession] = useState(null);
  const [currentScreen, setCurrentScreen] = useState("facts");
  const [error, setError] = useState("");

  async function getSession() {
    const session = await browser.runtime.sendMessage({
      action: "getSession",
      value: {
        accessToken: JSON.parse(localStorage.getItem("session")).accessToken,
      },
    });
    console.log(session);
    setSession(session);
  }

  useEffect(() => {
    const storedSession = localStorage.getItem("session");
    if (
      storedSession &&
      storedSession !== "undefined" &&
      storedSession !== null &&
      storedSession !== ""
    ) {
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

  async function handleSignUp(username, email, password) {
    setError("");
    const { data, error } = await browser.runtime.sendMessage({
      action: "signup",
      value: { username, email, password },
    });
    if (error) {
      setError(error);
    } else {
      setCurrentScreen("signin");
    }
  }

  async function handleSignIn(username, password) {
    const { data, error } = await browser.runtime.sendMessage({
      action: "signin",
      value: { username, password },
    });

    if (error) {
      setError(error);
    } else {
      setError("");
      console.log(data);
      localStorage.setItem("session", JSON.stringify(data));
      setSession(data);
    }
  }

  async function handleSignOut() {
    localStorage.removeItem("session");

    setCurrentScreen("signin");
    setSession("");
  }

  function renderApp() {
    if (!session) {
      if (currentScreen === "signup") {
        return (
          <SignUp
            onSignUp={handleSignUp}
            onScreenChange={() => {
              setCurrentScreen("signin");
              setError("");
            }}
            error={error}
          />
        );
      }
      return (
        <SignIn
          onSignIn={handleSignIn}
          onScreenChange={() => {
            setCurrentScreen("signup");
            setError("");
          }}
          error={error}
        />
      );
    }

    return (
      <>
        <div className="w-96 min-h-96 max-h-[12rem]">
          <Home />
        </div>
      </>
    );
  }

  return <div className="w-96 min-h-96 max-h-[8rem] dark">{renderApp()}</div>;
};
export default App;
