import { useState } from "react";

export default function Header({ session, setCurrentScreen, setSession }) {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false); // Use state to manage dropdown visibility

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible); // Toggle the dropdown visibility state
  };

  async function handleSignOut() {
    localStorage.removeItem("session");

    setCurrentScreen("signin");
    setSession("");
  }

  return (
    <div className="w-full flex justify-between items-center bg-gray-50 dark:bg-gray-900 py-4 px-4">
      <div className="flex flex-row items-center justify-center">
        <img
          className="w-8 h-8 mr-2"
          src="./icons/android-chrome-512x512.png"
          alt="logo"
        />
        <span className="text-lg font-bold text-gray-900 dark:text-white">
          Plexi
        </span>
      </div>
      <div className="flex justify-center">
        <img
          id="avatarButton"
          type="button"
          data-dropdown-toggle="userDropdown"
          data-dropdown-placement="bottom-start"
          className="w-8 h-8 rounded-full cursor-pointer"
          src={`https://ui-avatars.com/api/?name=${session.username}&background=9AE6B4`}
          alt="User dropdown"
          onClick={toggleDropdown}
        />
        <div
          id="userDropdown"
          className={`absolute top-[4.5rem] right-[1.5rem] z-10 ${
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
              <a
                href="#"
                className="block px-4 py-1 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Home
              </a>
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
