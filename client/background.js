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

// // Get the current tab ID
// async function getCurrentTab() {
//   let queryOptions = { active: true, lastFocusedWindow: true };
//   // `tab` will either be a `tabs.Tab` instance or `undefined`.
//   let [tab] = await browser.tabs.query(queryOptions);
//   return tab;
// }
// function getTitle() {
//   document.querySelector("html").style.filter = "invert(1) hue-rotate(180deg)";

//   let media = document.querySelectorAll("img, video, picture, svg, iframe");
//   media.forEach((element) => {
//     element.style.filter = "invert(1) hue-rotate(180deg)";
//   });
// }

// @ts-ignore
browser.runtime.onMessage.addListener((msg, sender, response) => {
  // const tabId = await getCurrentTab(); // Get the current tab ID
  // console.log(tabId);
  // if (tabId !== null) {
  //   browser.scripting
  //     .executeScript({
  //       target: { tabId: tabId.id },
  //       func: getTitle, // Corrected "func" to "function"
  //     })
  //     .then(() => console.log("script injected"));
  // }
  handleMessage(msg, response);
  return true;
});
