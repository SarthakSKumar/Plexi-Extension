import React from "react";

const BackButton = ({ setCurrentScreen }) => {
  const handleButtonClick = () => {
    setCurrentScreen("home");
  };

  return (
    <button
      onClick={handleButtonClick}
      className="inline-block no-underline px-2 py-1 text-md bg-white text-black hover:bg-green-600 hover:text-white rounded-full"
    >
      &#8249;
    </button>
  );
};

export default BackButton;
