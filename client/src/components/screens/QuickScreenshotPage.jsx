import React, { useState, useEffect } from "react";
import browser from "webextension-polyfill";
import BackButton from "../Buttons/BackButton";

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
  const handleCancelClick = () => {
    setScreenshotData(null);
  };
  return (
    <section className="bg-gray-50 dark:bg-gray-900 pt-1 pb-4 px-3">
      <BackButton setCurrentScreen={setCurrentScreen} />
      <div className="flex flex-col items-center justify-center mx-auto">
        <div className=" flex justify-center w-full py-1.5 bg-white rounded-md shadow dark:border dark:bg-gray-800 dark:border-gray-700 px-3">
          <button
            className="dark:bg-primary-400 bg-primary-500 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
            onClick={() => clickScreenshot()}
          >
            Capture Screenshot
          </button>
        </div>
        {screenshotData && (
          <div>
            <img src={screenshotData} alt="Screenshot" />
            <button
              className="dark:bg-primary-400 bg-primary-500 text-white font-bold py-2
               px-4 mt-4 rounded-lg focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
              onClick={() => handleSaveClick()}
            >
              Save
            </button>
            <button
              className="bg-gray-200 hover:bg-whitesmoke text-gray-800 font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline mt-4 ml-4 transition duration-300 ease-in-out"
              onClick={handleCancelClick}
            >
              Cancel
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ScreenshotPage;
