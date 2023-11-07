import React from "react";

const BackButton = ({ setCurrentScreen }) => {
  const handleButtonClick = () => {
    setCurrentScreen("home");
  };

  return (
    <button
      onClick={handleButtonClick}
      className="dark:bg-primary-400 bg-primary-500 text-white rounded-md p-0.5 text-sm hover:bg-primary-700 transition duration-300 pb-3 mb-2"
    >
      &#8249; Home
    </button>
  );
};

export default BackButton;
