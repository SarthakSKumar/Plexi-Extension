import React, { useState, useEffect } from "react";
import browser from "webextension-polyfill";

const ScreenshotPage = ({ setCurrentScreen }) => {
  const [screenshotData, setScreenshotData] = useState(null);

  async function clickScreenshot() {
    const { data, error } = await browser.runtime.sendMessage({
      action: "screenshot",
    });
    console.log(data);
    if (data) {
      setScreenshotData(data);
    }
  }

  const handleSaveClick = () => {
    const a = document.createElement("a");
    a.href = screenshotData;
    a.download = "screenshot.jpg";
    a.click();
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 pt-1 pb-4 px-3">
      <div className="flex flex-col items-center justify-center mx-auto">
        <div className="w-full py-1.5 bg-white rounded-md shadow dark:border dark:bg-gray-800 dark:border-gray-700 px-3">
          <button onClick={() => clickScreenshot()}>Capture Screenshot</button>
        </div>
        {screenshotData && (
          <div>
            <img src={screenshotData} alt="Screenshot" />
            <button onClick={() => handleSaveClick()}>Save</button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ScreenshotPage;
