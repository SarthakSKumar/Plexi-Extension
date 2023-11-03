import { useEffect, useState } from "react";

import SignIn from "./components/screens/SignInPage";
import SignUp from "./components/screens/SignUpPage";
import Home from "./components/screens/HomePage";

import Header from "./components/Header";
import BookmarkPage from "./components/screens/BookmarkPage";
import QuickSearchPage from "./components/screens/QuickSearchPage";
import LanguageTranslatorPage from "./components/screens/LanguageTranslatorPage";
import PasswordGeneratorPage from "./components/screens/PasswordGeneratorPage";
import QuickNotesPage from "./components/screens/QuickNotesPage";
import QuickScreenshotPage from "./components/screens/QuickScreenshotPage";
import DarkLightModePage from "./components/screens/DarkLightModePage";
import WebpageAnnotationPage from "./components/screens/WebpageAnnotationPage";

import { jwtDecode } from "jwt-decode";
import "@fontsource-variable/hanken-grotesk";

const App = () => {
  const [session, setSession] = useState(null);
  const [currentScreen, setCurrentScreen] = useState("");
  const [currentTheme, setCurrentTheme] = useState("dark");

  useEffect(() => {
    try {
      const storedSession = JSON.parse(localStorage.getItem("session"));
      const decodedToken = jwtDecode(storedSession.accessToken);
      if (decodedToken.exp * 1000 < Date.now()) {
        localStorage.removeItem("session");
        setCurrentScreen("signin");
      } else {
        setSession(storedSession);
        setCurrentScreen("home");
      }
    } catch (err) {
      setSession(null);
      localStorage.removeItem("session");
      setCurrentScreen("signin");
    }
  }, []);
  useEffect(() => {
    console.log(currentScreen);
  }, [currentScreen]);

  function renderScreen() {
    if (
      !session ||
      session === null ||
      session === "" ||
      session === undefined ||
      session === "undefined"
    ) {
      if (currentScreen === "signup") {
        return <SignUp setCurrentScreen={setCurrentScreen} />;
      } else {
        return (
          <SignIn setSession={setSession} setCurrentScreen={setCurrentScreen} />
        );
      }
    } else {
      switch (currentScreen) {
        case "home":
          return <Home setCurrentScreen={setCurrentScreen} />;
        case "bookmarks":
          return <BookmarkPage setCurrentScreen={setCurrentScreen} />;
        case "aisearch":
          return <QuickSearchPage setCurrentScreen={setCurrentScreen} />;
        case "translate":
          return <LanguageTranslatorPage setCurrentScreen={setCurrentScreen} />;
        case "passwords":
          return <PasswordGeneratorPage setCurrentScreen={setCurrentScreen} />;
        case "notes":
          return <QuickNotesPage setCurrentScreen={setCurrentScreen} />;
        case "screenshot":
          return <QuickScreenshotPage setCurrentScreen={setCurrentScreen} />;
        case "themeswitch":
          return <DarkLightModePage setCurrentScreen={setCurrentScreen} />;
        case "annotate":
          return <WebpageAnnotationPage setCurrentScreen={setCurrentScreen} />;
        default:
          return <Home setCurrentScreen={setCurrentScreen} />;
      }
    }
  }

  return (
    <div className={`w-[26rem] ${currentTheme}`}>
      {currentScreen !== "signin" &&
        currentScreen !== "signup" &&
        session !== null && (
          <Header
            session={session}
            currentScreen={currentScreen}
            currentTheme={currentTheme}
            setCurrentScreen={setCurrentScreen}
            setSession={setSession}
            setCurrentTheme={setCurrentTheme}
          />
        )}
      {renderScreen()}
    </div>
  );
};

export default App;
