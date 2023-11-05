import browser from "webextension-polyfill";
import { SignInHandler, SignUpHandler } from "./src/handlers/auth.js";
import { toggleTheme, applyEffects } from "./src/handlers/themeswitch.js";
import getCurrentTab from "./src/utils/getCurrentTabDetails.js";

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

async function captureScreenshot(response) {
  try {
    const tab = await getCurrentTab();
    const screenshotUrl = await browser.tabs.captureVisibleTab(tab.windowId, {
      format: "jpeg",
    });
    response({ data: screenshotUrl, error: null });
  } catch (error) {
    response({ data: null, error: "Error capturing screenshot" });
  }
}

browser.runtime.onMessage.addListener((msg, sender, response) => {
  handleMessage(msg, response);
  return true;
});
