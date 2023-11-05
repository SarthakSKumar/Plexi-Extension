import React, { useState, useEffect } from "react";
import browser from "webextension-polyfill";

const ScreenshotPage = ({ setCurrentScreen }) => {
  async function clickScreenshot() {
    const { data, error } = await browser.runtime.sendMessage({
      action: "screenshot",
    });
    console.log("front", data);
  }

  return (
    <section className="bg-gray-50 dark:bg-gray-900 pt-1 pb-4 px-3">
      <div className="flex flex-col items-center justify-center mx-auto">
        <div className="w-full py-1.5 bg-white rounded-md shadow dark:border dark:bg-gray-800 dark:border-gray-700 px-3">
          <button onClick={() => clickScreenshot()}>Click Screenshot</button>
        </div>
      </div>
    </section>
  );
};

export default ScreenshotPage;
