import ListButton from "../Buttons/ListButton";
import React from "react";
import Calendar from "../Calendar";

const Home = ({ setCurrentScreen }) => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 pt-1 pb-4 px-4">
      <div className="flex flex-col items-center justify-center mx-auto">
        <Calendar />
        <div className="w-full py-1.5 bg-white rounded-md shadow dark:border dark:bg-gray-800 dark:border-gray-700">
          <ListButton
            title="Bookmark Manager"
            tagline="Web Organization with Bookmarks"
            slug="bookmarks"
            setCurrentScreen={setCurrentScreen}
          />

          <ListButton
            title="Quick AI Search"
            tagline="Search Made Smarter with AI"
            slug="aisearch"
            setCurrentScreen={setCurrentScreen}
          />

          <ListButton
            title="Language Translator"
            tagline="Instant Translation, One Click!"
            slug="translate"
            setCurrentScreen={setCurrentScreen}
          />

          <ListButton
            title="Password Manager"
            tagline="Security Simplified, Your Guardian"
            slug="passwords"
            setCurrentScreen={setCurrentScreen}
          />

          <ListButton
            title="Quick Note"
            tagline="Efficient Ideas, Quick Notes!"
            slug="notes"
            setCurrentScreen={setCurrentScreen}
          />

          <ListButton
            title="Quick Screenshot"
            tagline="Capture Screens in an Instant"
            slug="screenshot"
            setCurrentScreen={setCurrentScreen}
          />

          <ListButton
            title="Light/Dark Mode"
            tagline="Light or Dark, Your Choice!"
            slug="themeswitch"
            setCurrentScreen={setCurrentScreen}
          />

          <ListButton
            title="Webpage Annotation"
            tagline="Enhance Web Content with Annotations"
            slug="annotate"
            setCurrentScreen={setCurrentScreen}
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
