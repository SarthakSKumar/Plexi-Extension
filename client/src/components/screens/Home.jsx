import ListButton from "../Buttons/ListButton";
import React from "react";

const Home = ({ setCurrentScreen }) => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 pt-1 pb-4 px-4">
      <div className="flex flex-col items-center justify-center m-1 p-1 mx-auto">
        <div className="w-full bg-white rounded-md shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <ListButton
            title="Bookmark Manager"
            tagline="Your Web Favorites, Effortlessly Organized"
            icon="bookmark"
            onClick={() => setCurrentScreen("bookmarks")}
          />

          <ListButton
            title="Quick Search AI"
            tagline="Search Made Smarter with AI"
            icon="ai-search"
            onclick={() => setCurrentScreen("ai-search")}
          />

          <ListButton
            title="Language Translator"
            tagline="Translate and Connect Worldwide"
            icon="translate"
            onClick={() => setCurrentScreen("translate")}
          />

          <ListButton
            title="Password Generator and Manager"
            tagline="Safeguarding Your Digital Life, Simply"
            icon="lock"
            onClick={() => setCurrentScreen("passwords")}
          />

          <ListButton
            title="Quick Notes"
            tagline="Capture Thoughts in a Flash"
            icon="note"
            onClick={() => setCurrentScreen("notes")}
          />

          <ListButton
            title="Quick Screenshot"
            tagline="Capture Screens in an Instant"
            icon="screenshot"
            onClick={() => setCurrentScreen("screenshot")}
          />

          <ListButton
            title="Dark-Mode/Light-Mode Switching"
            tagline="Adapt UI to Your Comfort"
            icon="dark-light"
            onClick={() => setCurrentScreen("dark-light")}
          />

          <ListButton
            title="Webpage Annotation"
            tagline="Enhance Web Content with Annotations"
            icon="annotate"
            onClick={() => setCurrentScreen("annotate")}
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
