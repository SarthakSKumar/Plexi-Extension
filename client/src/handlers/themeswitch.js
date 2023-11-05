async function getCurrentTab() {
  const queryOptions = { active: true, lastFocusedWindow: true };
  const [tab] = await browser.tabs.query(queryOptions);
  return tab;
}

export async function toggleTheme() {
  const tabIdPromise = getCurrentTab();
  tabIdPromise.then((tabId) => {
    if (tabId !== null) {
      try {
        browser.scripting.executeScript({
          target: { tabId: tabId.id },
          func: () => {
            // Switch between dark and light themes
            const currentTheme =
              localStorage.getItem("currentTheme") || "light";
            const newTheme = currentTheme === "dark" ? "light" : "dark";

            const invertValue = newTheme === "dark" ? 1 : 0;
            const hueRotateValue = newTheme === "dark" ? "180deg" : "0deg";

            document.querySelector(
              "html"
            ).style.filter = `invert(${invertValue}) hue-rotate(${hueRotateValue})`;

            const media = document.querySelectorAll(
              "img, video, picture, svg, iframe"
            );
            media.forEach((element) => {
              element.style.filter = `invert(${invertValue}) hue-rotate(${hueRotateValue})`;
            });

            localStorage.setItem("currentTheme", newTheme);
          },
        });
      } catch (error) {
        console.log(error);
      }
    }
  });
}

export async function applyEffects({ brightness, blur, contrast }) {
  const tabIdPromise = getCurrentTab();
  tabIdPromise.then((tabId) => {
    if (tabId !== null) {
      browser.scripting.executeScript({
        target: { tabId: tabId.id },
        func: (brightness, blur, contrast) => {
          // Apply brightness, blur, and contrast changes
          const currentTheme = localStorage.getItem("currentTheme") || "light";
          const invertValue = currentTheme === "dark" ? 1 : 0;
          const hueRotateValue = currentTheme === "dark" ? "180deg" : "0deg";

          document.querySelector(
            "html"
          ).style.filter = `invert(${invertValue}) hue-rotate(${hueRotateValue}) brightness(${brightness}) blur(${blur}px) contrast(${contrast})`;

          const media = document.querySelectorAll(
            "img, video, picture, svg, iframe"
          );
          media.forEach((element) => {
            element.style.filter = `invert(${invertValue}) hue-rotate(${hueRotateValue}) brightness(${brightness}) blur(${blur}px) contrast(${contrast})`;
          });
        },
        args: [brightness, blur, contrast],
      });
    }
  });
}
