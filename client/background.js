import browser from "webextension-polyfill";
import { SignInHandler, SignUpHandler } from "./src/handlers/auth.js";
import { toggleTheme, applyEffects } from "./src/handlers/themeswitch.js";
import { captureScreenshot } from "./src/handlers/quickscreenshot.js";

async function handleMessage({ action, values }, response) {
  if (action === "signup") {
    await SignUpHandler(values, response);
  } else if (action === "signin") {
    await SignInHandler(values, response);
  } else if (action === "toggleTheme") {
    await toggleTheme(values);
  } else if (action === "applyEffects") {
    await applyEffects(values);
  } else if (action === "screenshot") {
    await captureScreenshot(response);
  } else {
    response({ data: null, error: "Unknown action" });
  }
}

browser.runtime.onMessage.addListener((msg, sender, response) => {
  handleMessage(msg, response);
  return true;
});
