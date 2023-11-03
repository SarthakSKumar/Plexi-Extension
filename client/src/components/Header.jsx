import { useState } from "react";
import ThemeSwitchButton from "./Buttons/ThemeSwitchButton";
import getScreenDetails from "../utils/getScreenDetails";
export default function Header({
  currentTheme,
  session,
  setCurrentScreen,
  setSession,
  setCurrentTheme,
  currentScreen,
}) {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false); // Use state to manage dropdown visibility

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible); // Toggle the dropdown visibility state
  };

  const handleSignOut = () => {
    setSession("");
    localStorage.removeItem("session");
    setCurrentScreen("signin");
  };
  const { screenName, screenIcon, tagline } = getScreenDetails(currentScreen);

  return (
    <div className="w-full flex justify-between items-center bg-gray-50 dark:bg-gray-900 pt-4 pb-3 px-4">
      <div
        className="flex flex-row items-center justify-center"
        onClick={setCurrentScreen("home")}
      >
        <img className="w-8 h-8 mr-2" src={screenIcon} alt={screenName} />
        <span className="text-lg font-bold text-gray-900 dark:text-white">
          {screenName}
        </span>
      </div>
      <div className="flex justify-center">
        <ThemeSwitchButton
          currentTheme={currentTheme}
          setCurrentTheme={setCurrentTheme}
        />
        <img
          id="avatarButton"
          type="button"
          className="w-8 h-8 rounded-full cursor-pointer"
          src={`https://ui-avatars.com/api/?name=${session.username}&background=9AE6B4`}
          alt="User Avatar"
          onClick={toggleDropdown}
        />
        <div
          id="userDropdown"
          className={`absolute top-[3.5rem] right-[1.5rem] z-10 ${
            isDropdownVisible ? "" : "hidden"
          } bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}
        >
          <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
            <div>{session.username}</div>
            <div className="font-medium truncate">{session.email}</div>
          </div>
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="avatarButton"
          >
            <li>
              <p
                onClick={() => setCurrentScreen("home")}
                className="block px-4 py-1 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Home
              </p>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-1 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Settings
              </a>
            </li>
          </ul>
          <div className="py-1">
            <p
              onClick={handleSignOut}
              className="block px-4 py-1 text-sm text-orange-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-orange-600 dark:hover:text-white"
            >
              Sign out
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
