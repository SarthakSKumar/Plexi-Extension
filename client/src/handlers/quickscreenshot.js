import getCurrentTab from "../utils/getCurrentTabDetails";
import browser from "webextension-polyfill";

export async function captureScreenshot(response) {
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
