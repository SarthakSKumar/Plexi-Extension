import browser from "webextension-polyfill";
import { SignInHandler, SignUpHandler } from "./src/apis/auth.js";
async function handleMessage({ action, value }, response) {
  if (action === "signup") {
    SignUpHandler(value, response);
  } else if (action === "signin") {
    SignInHandler(value, response);
  } else {
    response({ data: null, error: "Unknown action" });
  }
}

// @ts-ignore
browser.runtime.onMessage.addListener((msg, sender, response) => {
  const bookmarkData = {
    title: "My Bookmark",
    url: "https://example.com",
  };

  browser.bookmarks
    .create(bookmarkData)
    .then((bookmark) => {
      console.log("Bookmark created:", bookmark);
    })
    .catch((error) => {
      console.error("Error creating bookmark:", error);
    });
  handleMessage(msg, response);
  return true;
});
