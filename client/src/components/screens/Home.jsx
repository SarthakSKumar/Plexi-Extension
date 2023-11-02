import ListButton from "../Buttons/ListButton";
import React, { useState } from "react";

const Home = ({ setSession, setCurrentScreen }) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false); // Use state to manage dropdown visibility

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible); // Toggle the dropdown visibility state
  };

  async function handleSignOut() {
    localStorage.removeItem("session");

    setCurrentScreen("signin");
    setSession("");
  }

  const session = JSON.parse(localStorage.getItem("session"));

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-6 mx-auto md:h-screen lg:py-0">
        <div className="w-full flex justify-between items-center my-3">
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
        <div className="w-full bg-white rounded-md shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <ListButton
            title="Bookmark Manager"
            tagline="Your Web Favorites, Effortlessly Organized"
            icon="bookmark"
          />

          <ListButton
            title="Quick Search AI"
            tagline="Search Made Smarter with AI"
            icon="ai-search"
          />

          <ListButton
            title="Language Translator"
            tagline="Translate and Connect Worldwide"
            icon="translate"
          />

          <ListButton
            title="Password Generator and Manager"
            tagline="Safeguarding Your Digital Life, Simply"
            icon="lock"
          />

          <ListButton
            title="Quick Notes"
            tagline="Capture Thoughts in a Flash"
            icon="note"
          />

          <ListButton
            title="Quick Screenshot"
            tagline="Capture Screens in an Instant"
            icon="screenshot"
          />

          <ListButton
            title="Dark-Mode/Light-Mode Switching"
            tagline="Adapt UI to Your Comfort"
            icon="dark-light"
          />

          <ListButton
            title="Webpage Annotation"
            tagline="Enhance Web Content with Annotations"
            icon="annotate"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
