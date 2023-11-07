import React from "react";
import BackButton from "../Buttons/BackButton";

const Home = ({ setCurrentScreen }) => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 pt-1 pb-4 px-4">
      <BackButton setCurrentScreen={setCurrentScreen} />
      <div className="flex flex-col items-center justify-center mx-auto">
        <div className="w-full bg-white rounded-md shadow dark:border dark:bg-gray-800 dark:border-gray-700">
          Bookmark Manager
        </div>
      </div>
    </section>
  );
};

export default Home;
