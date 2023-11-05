import browser from "webextension-polyfill";
import { SignInHandler, SignUpHandler } from "./src/handlers/auth.js";
import { toggleTheme, applyEffects } from "./src/handlers/themeswitch.js";
import { captureScreenshot } from "./src/handlers/quickscreenshot.js";

async function handleMessage({ action, values }, response) {
  if (action === "signup") {
    SignUpHandler(values, response);
  } else if (action === "signin") {
    SignInHandler(values, response);
  } else if (action === "toggleTheme") {
    toggleTheme(values);
  } else if (action === "applyEffects") {
    applyEffects(values);
  } else if (action === "screenshot") {
    captureScreenshot(response);
  } else {
    response({ data: null, error: "Unknown action" });
  }
}

browser.runtime.onMessage.addListener((msg, sender, response) => {
  handleMessage(msg, response);
  return true;
});
