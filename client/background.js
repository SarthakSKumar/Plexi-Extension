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

// async function getCurrentTab() {
//   const queryOptions = { active: true, lastFocusedWindow: true };
//   const [tab] = await browser.tabs.query(queryOptions);
//   return tab;
// }

// async function getTitle() {
//   document.querySelector("html").style.filter = "invert(1) hue-rotate(180deg)";

//   const media = document.querySelectorAll("img, video, picture, svg, iframe");
//   media.forEach((element) => {
//     element.style.filter = "invert(1) hue-rotate(180deg)";
//   });
// }

browser.runtime.onMessage.addListener((msg, sender, response) => {
  // const tabIdPromise = getCurrentTab();
  // tabIdPromise.then((tabId) => {
  //   if (tabId !== null) {
  //     browser.scripting
  //       .executeScript({
  //         target: { tabId: tabId.id },
  //         func: getTitle,
  //       })
  //       .then(() => console.log("Script injected"));
  //   }
  // });
  handleMessage(msg, response);
  return true;
});
