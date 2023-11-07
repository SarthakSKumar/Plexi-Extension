// import React, { useState, useEffect } from "react";
// import browser from "webextension-polyfill";

// const ThemeSwitchPage = ({ setCurrentScreen }) => {
//   const [brightness, setBrightness] = useState(1);
//   const [blur, setBlur] = useState(0);
//   const [contrast, setContrast] = useState(1);

//   useEffect(() => {
//     async function applyEffects() {
//       const { data, error } = await browser.runtime.sendMessage({
//         action: "applyEffects",
//         values: { brightness, blur, contrast },
//       });
//     }
//     applyEffects();
//   }, [brightness, blur, contrast]);

//   async function enableTheme() {
//     const { data, error } = await browser.runtime.sendMessage({
//       action: "toggleTheme",
//     });
//   }

//   return (
//     <section className="bg-gray-50 dark:bg-gray-900 pt-1 pb-4 px-3">
//       <div className="flex flex-col items-center justify-center mx-auto">
//         <div className="w-full py-1.5 bg-white rounded-md shadow dark:border dark:bg-gray-800 dark:border-gray-700 px-3">
//           <button onClick={() => enableTheme()}>Toggle Theme</button>
//           <div className="slider">
//             <div className="text-black dark:text-gray-100 text-start">
//               Brightness
//             </div>
//             <input
//               type="range"
//               min="0"
//               max="2"
//               step="0.1"
//               value={brightness}
//               onChange={(e) => setBrightness(e.target.value)}
//               className="w-full h-2 mb-1 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
//             />
//             <div className="flex justify-between">
//               <span className="text-primary-800 dark:text-primary-200">0</span>
//               <span>{brightness * 100}</span>
//               <span className="text-primary-700 dark:text-primary-300 font-semibold">
//                 250
//               </span>
//             </div>
//           </div>
//           <div className="slider">
//             <div className="text-md font-semibold text-gray-900 dark:text-white mb-0.5 w-full text-left">
//               Blur
//             </div>
//             <input
//               type="range"
//               min="0"
//               max="1"
//               step="0.1"
//               value={blur}
//               onChange={(e) => setBlur(e.target.value)}
//               className="w-full h-2 mb-1 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
//             />
//             <div className="flex justify-between">
//               <span className="text-primary-800 dark:text-primary-300">0</span>
//               <span className="text-primary-800 dark:text-primary-100">
//                 {blur * 100}
//               </span>
//               <span className="text-primary-700 dark:text-primary-300 font-semibold">
//                 100
//               </span>
//             </div>
//           </div>
//           <div className="slider">
//             <div className="text-md font-semibold text-gray-900 dark:text-white mb-0.5 w-full text-left">
//               Contrast
//             </div>
//             <input
//               type="range"
//               min="0"
//               max="2"
//               step="0.1"
//               value={contrast}
//               onChange={(e) => setContrast(e.target.value)}
//               className="w-full h-2 mb-1 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
//             />
//             <div className="flex justify-between">
//               <span className="text-primary-800 dark:text-primary-300">0</span>
//               <span className="text-primary-800 dark:text-primary-100">
//                 {contrast * 100}
//               </span>
//               <span className="text-primary-700 dark:text-primary-300 font-semibold">
//                 200
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ThemeSwitchPage;

import React, { useState, useEffect } from "react";
import browser from "webextension-polyfill";
import BackButton from "../Buttons/BackButton";

const ThemeSwitchPage = ({ setCurrentScreen }) => {
  const [brightness, setBrightness] = useState(1);
  const [blur, setBlur] = useState(0);
  const [contrast, setContrast] = useState(1);

  useEffect(() => {
    async function applyEffects() {
      const { data, error } = await browser.runtime.sendMessage({
        action: "applyEffects",
        values: { brightness, blur, contrast },
      });
    }
    applyEffects();
  }, [brightness, blur, contrast]);

  async function enableTheme() {
    const { data, error } = await browser.runtime.sendMessage({
      action: "toggleTheme",
    });
  }

  return (
    <section className="bg-gray-50 dark:bg-gray-900 pt-1 pb-4 px-3">
      <BackButton setCurrentScreen={setCurrentScreen} />
      <div className="flex flex-col items-center justify-center mx-auto">
        <div className="w-full py-1.5 bg-white dark:bg-gray-800 dark:border dark:border-gray-700 px-3 rounded-md shadow-md mb-4">
          <button
            onClick={() => enableTheme()}
            className="bg-primary-500 hover:bg-primary-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline mb-4"
          >
            Toggle Theme
          </button>
          <div className="slider mb-4">
            <div className="text-sm font-semibold text-gray-900 dark:text-white mb-1 w-full text-left">
              Brightness
            </div>
            <input
              type="range"
              min="0"
              max="2"
              step="0.1"
              value={brightness}
              onChange={(e) => setBrightness(e.target.value)}
              className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-xs text-primary-800 dark:text-primary-300">
              <span>0</span>
              <span>{brightness * 100}</span>
              <span>200</span>
            </div>
          </div>
          <div className="slider mb-4">
            <div className="text-sm font-semibold text-gray-900 dark:text-white mb-1 w-full text-left">
              Blur
            </div>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={blur}
              onChange={(e) => setBlur(e.target.value)}
              className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-xs text-primary-800 dark:text-primary-300">
              <span>0</span>
              <span>{blur * 100}</span>
              <span>100</span>
            </div>
          </div>
          <div className="slider mb-4">
            <div className="text-sm font-semibold text-gray-900 dark:text-white mb-1 w-full text-left">
              Contrast
            </div>
            <input
              type="range"
              min="0"
              max="2"
              step="0.1"
              value={contrast}
              onChange={(e) => setContrast(e.target.value)}
              className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-xs text-primary-800 dark:text-primary-300">
              <span>0</span>
              <span>{contrast * 100}</span>
              <span>200</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThemeSwitchPage;
