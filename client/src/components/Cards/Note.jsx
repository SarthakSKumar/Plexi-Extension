// src/components/Note.js
import React, { useState } from "react";

const Note = ({
  id,
  title,
  description,
  onDelete,
  onSave,
  isNew,
  onCancelNewNote,
  onChange,
}) => {
  const [titleError, setTitleError] = useState("");

  const handleSave = () => {
    // Check if the title is not empty before saving
    if (title.trim() === "") {
      setTitleError("Title is mandatory. Please enter a title.");
      return;
    }

    setTitleError("");
    onSave();
  };

  return (
    <div className="bg-gray-200 p-4 m-4 rounded-lg relative">
      {isNew && (
        <button
          onClick={onCancelNewNote}
          className="text-red-500 font-bold py-1 px-2 rounded absolute top-2 right-2"
        >
          ✗
        </button>
      )}
      <div className="flex items-center mb-2">
        <input
          type="text"
          className={`text-lg font-bold outline-none w-full ${isNew ? "border-b-2 border-gray-400" : "border-none"
            } mr-8`}
          placeholder="Title"
          value={title}
          onChange={(e) => onChange("title", e.target.value)}
          required
        />
      </div>
      <p className="text-red-500">{titleError}</p>
      <textarea
        className="mb-2 p-2 w-full resize-none outline-none border-b-2 border-gray-400"
        placeholder="Description"
        value={description}
        onChange={(e) => onChange("description", e.target.value)}
      />
      <div className="flex items-center justify-between mt-2">
        {isNew && (
          <button
            onClick={handleSave}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-2 rounded"
          >
            ✓ Save
          </button>
        )}
        {!isNew && (
          <button
            onClick={onDelete}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded ml-2"
          >
            ✗ Delete
          </button>
        )}
      </div>
    </div>
  );
};

export default Note;
