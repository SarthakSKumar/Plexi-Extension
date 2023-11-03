import ListButton from "../Buttons/ListButton";
import React from "react";

const Home = ({ setCurrentScreen }) => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 pt-1 pb-4 px-4">
      <div className="flex flex-col items-center justify-center m-1 p-1 mx-auto">
        <div className="w-full bg-white rounded-md shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <ListButton
            title="Bookmark Master"
            tagline="Web Organization with Bookmarks"
            icon="bookmark"
            onClick={() => setCurrentScreen("bookmarks")}
          />

          <ListButton
            title="Quick Search AI"
            tagline="Search Made Smarter with AI"
            icon="ai-search"
            onClick={() => setCurrentScreen("ai-search")}
          />

          <ListButton
            title="Language translator"
            tagline="Instant Translation, One Click!"
            icon="translate"
            onClick={() => setCurrentScreen("translate")}
          />

          <ListButton
            title="Password generator and manager"
            tagline="Security Simplified, Your Guardian"
            icon="lock"
            onClick={() => setCurrentScreen("passwords")}
          />

          <ListButton
            title="Quick notes"
            tagline="Efficient Ideas, Quick Notes!"
            icon="note"
            onClick={() => setCurrentScreen("notes")}
          />

          <ListButton
            title="Quick screenshot"
            tagline="Capture Screens in an Instant"
            icon="screenshot"
            onClick={() => setCurrentScreen("screenshot")}
          />

          <ListButton
            title="Light/Dark Mode"
            tagline="Light or Dark, Your Choice!"
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
