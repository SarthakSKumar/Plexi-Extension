import React, { useState } from 'react';
import BackButton from "../Buttons/BackButton";
import Card from "../Cards/Bookmark_card";

const Bookmark = ({ setCurrentScreen }) => {
  const [url, setUrl] = useState('');
  const [name, setName] = useState('');
  const [savedData, setSavedData] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSaveClick = () => {
    if (name.trim() !== '' && url.trim() !== '') {
      const newEntry = { url, name };
      setSavedData([...savedData, newEntry]);
      setUrl('');
      setName('');
      setErrorMessage('');
    } else {
      setErrorMessage('Please fill in both Bookmark Name and URL.');
    }
  };

  const handleDelete = (index) => {
    const updatedData = [...savedData];
    updatedData.splice(index, 1);
    setSavedData(updatedData);
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 pt-1 pb-4 px-4 bottom-3">
      <div><BackButton setCurrentScreen={setCurrentScreen} /></div>
      <div className="flex flex-col text-white text-base mt-3">
        {errorMessage && (
          <p className="text-red-500">{errorMessage}</p>
        )}
        <label>
          Bookmark Name:
          <input
            required
            type="text"
            className="w-full h-8 text-base bg-white rounded-md shadow dark:border dark:bg-gray-800 dark:border-gray-700"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          URL:
          <input
            required
            type="url"
            className="w-full h-8 text-base bg-white rounded-md shadow dark:border dark:bg-gray-800 dark:border-gray-700"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </label>
        <br />
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={handleSaveClick}>Save</button>
        {savedData.length > 0 && (
          <div>
            {savedData.map((entry, index) => (
              <Card
                key={index}
                url={entry.url}
                name={entry.name}
                onDelete={() => handleDelete(index)}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Bookmark;