import browser from "webextension-polyfill";
import { SignInHandler, SignUpHandler } from "./src/apis/auth.js";

async function handleMessage({ action, values }, response) {
  if (action === "signup") {
    SignUpHandler(values, response);
  } else if (action === "signin") {
    SignInHandler(values, response);
  } else if (action === "toggleTheme") {
    toggleTheme(values);
  } else {
    response({ data: null, error: "Unknown action" });
  }
}

async function getCurrentTab() {
  const queryOptions = { active: true, lastFocusedWindow: true };
  const [tab] = await browser.tabs.query(queryOptions);
  return tab;
}

async function toggleTheme({ brightness, blur, contrast }) {
  const tabIdPromise = getCurrentTab();
  tabIdPromise.then((tabId) => {
    if (tabId !== null) {
      browser.scripting
        .executeScript({
          target: { tabId: tabId.id },
          func: (brightness, blur, contrast) => {
            // Apply brightness, blur, contrast, and theme changes
            const invertValue =
              localStorage.getItem("currentTheme") === "dark" ? 1 : 0;
            const hueRotateValue =
              localStorage.getItem("currentTheme") === "dark"
                ? "180deg"
                : "0deg";

            document.querySelector(
              "html"
            ).style.filter = `brightness(${brightness}) blur(${blur}px) contrast(${contrast}) invert(${invertValue}) hue-rotate(${hueRotateValue})`;

            const media = document.querySelectorAll(
              "img, video, picture, svg, iframe"
            );
            media.forEach((element) => {
              element.style.filter = `brightness(${brightness}) blur(${blur}px) contrast(${contrast}) invert(${invertValue}) hue-rotate(${hueRotateValue})`;
            });

            localStorage.setItem(
              "currentTheme",
              localStorage.getItem("currentTheme") === "dark" ? "light" : "dark"
            );
          },
          args: [brightness, blur, contrast],
        })
        .then(() => console.log("Script injected"));
    }
  });
}

browser.runtime.onMessage.addListener((msg, sender, response) => {
  handleMessage(msg, response);
  return true;
});
