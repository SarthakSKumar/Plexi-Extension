import browser from "webextension-polyfill";
import {
  SignInHandler,
  SignUpHandler,
  SessionHandler,
} from "./src/apis/auth.js";
async function handleMessage({ action, value }, response) {
  if (action === "signup") {
    SignUpHandler(value, response);
  } else if (action === "signin") {
    SignInHandler(value, response);
  } else if (action === "getSession") {
    SessionHandler(value, response);
  } else {
    response({ data: null, error: "Unknown action" });
  }
}

// @ts-ignore
browser.runtime.onMessage.addListener((msg, sender, response) => {
  handleMessage(msg, response);
  return true;
});
