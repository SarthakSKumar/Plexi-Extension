import { Field, Form, Formik } from "formik";
import { useState } from "react";
import browser from "webextension-polyfill";
import Cookies from "js-cookie";
const SignIn = ({ setSession, setCurrentScreen }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSignIn(username, password) {
    const { data, error } = await browser.runtime.sendMessage({
      action: "signin",
      value: { username, password },
    });
    if (error) {
      setError(error);
    } else {
      setError("");
      localStorage.setItem("session", JSON.stringify(data));
      setSession(data);
    }
  }

  function renderLoadingSpinner() {
    if (!loading) return null;

    return (
      <svg
        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white loading-button"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    );
  }

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-6 mx-auto md:h-screen lg:py-0">
        <div className="flex flex-row w-full items-center justify-center mb-4">
          <img
            className="w-8 h-8 mr-2"
            src="./icons/android-chrome-512x512.png"
            alt="logo"
          />
          <span className="text-xl font-bold text-gray-900 dark:text-white">
            Plexi
          </span>
        </div>
        <div className="w-full bg-white rounded-md shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white w-full text-center">
              Sign in
            </h1>
            <Formik
              initialValues={{
                username: "",
                password: "",
              }}
              onSubmit={async ({ username, password }) => {
                console.log("submitted");
                setLoading(true);
                await handleSignIn(username, password);
                console.log("done");
                setLoading(false);
              }}
            >
              <Form className="space-y-4 md:space-y-6">
                <div>
                  <label
                    htmlFor="username"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Username
                  </label>
                  <Field
                    name="username"
                    type="text"
                    id="username"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="username"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <Field
                    name="password"
                    type="password"
                    id="password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="••••••••••"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover-bg-primary-700 dark:focus:ring-primary-800"
                >
                  {renderLoadingSpinner()} Sign in
                </button>{" "}
                {error && (
                  <p
                    className={
                      "font-bold text-orange-700  dark:text-orange-600"
                    }
                  >
                    {error}
                  </p>
                )}{" "}
                <p className="text-sm font-light text-primary-950 dark:text-primary-50">
                  Dont have an account?{" "}
                  <span
                    onClick={() => setCurrentScreen("signup")}
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Sign Up
                  </span>
                </p>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
