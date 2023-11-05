import React, { useState } from "react";
import browser from "webextension-polyfill";

const Home = ({ setCurrentScreen }) => {
  const [brightness, setBrightness] = useState(0.5);
  const [blur, setBlur] = useState(0.5);
  const [contrast, setContrast] = useState(0.5);

  async function enable() {
    const { data, error } = await browser.runtime.sendMessage({
      action: "toggleTheme",
      values: { brightness, blur, contrast },
    });
  }

  return (
    <section className="bg-gray-50 dark:bg-gray-900 pt-1 pb-4 px-4">
      <div className="flex flex-col items-center justify-center mx-auto">
        <div className="w-full bg-white rounded-md shadow dark:border dark:bg-gray-800 dark:border-gray-700">
          <button onClick={() => enable()}>Click Button</button>
          <div className="slider">
            <label>Brightness</label>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={brightness}
              onChange={(e) => setBrightness(e.target.value)}
            />
          </div>
          <div className="slider">
            <label>Blur</label>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={blur}
              onChange={(e) => setBlur(e.target.value)}
            />
          </div>
          <div className="slider">
            <label>Contrast</label>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={contrast}
              onChange={(e) => setContrast(e.target.value)}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
