import { useState } from "react";
import BackButton from "../Buttons/BackButton";
import Note from "../Cards/Note";

const Home = ({ setCurrentScreen }) => {
  const [notes, setNotes] = useState([
    { id: 1, title: "Note 1", description: "This is the first note." },
    { id: 2, title: "Note 2", description: "This is the second note." },
  ]);

  const [isNewNoteSaved, setIsNewNoteSaved] = useState(true);
  const [titleError, setTitleError] = useState("");

  const handleDelete = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const handleAddNote = () => {
    // Check if the title is not empty before adding a new note
    if (!isNewNoteSaved) {
      setTitleError("Title is mandatory. Please enter a title.");
      return;
    }

    setTitleError(""); // Reset the error message
    const newNote = {
      id: notes.length + 1,
      title: "",
      description: "",
      isNew: true,
    };
    setNotes([newNote, ...notes]);
    setIsNewNoteSaved(false);
  };

  const handleCancelNewNote = () => {
    setNotes(notes.slice(1)); // Remove the new note template
    setIsNewNoteSaved(true); // Enable the "+" button after canceling the new note
    setTitleError(""); // Reset the error message
  };

  const handleNoteChange = (id, field, value) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === id ? { ...note, [field]: value } : note
      )
    );
    // If the new note template is being edited, reset the error message
    if (!isNewNoteSaved) {
      setIsNewNoteSaved(true);
      setTitleError("");
    }
  };

  const handleSaveNote = (id) => {
    // Check if the title is not empty before saving
    const noteToSave = notes.find((note) => note.id === id);
    if (noteToSave && noteToSave.title.trim() === "") {
      setTitleError("Title is mandatory. Please enter a title.");
      return;
    }

    setTitleError(""); // Reset the error message
    // Save the note
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === id ? { ...note, isNew: false } : note
      )
    );
    setIsNewNoteSaved(true); // Enable the "+" button after saving the new note
  };
  return (
    <section className="bg-gray-50 dark:bg-gray-900 pt-1 pb-4 px-4">
      <BackButton setCurrentScreen={setCurrentScreen} />
      <div className="flex flex-col items-center justify-center mx-auto">
        <div className="w-full bg-white rounded-md shadow dark:border dark:bg-gray-800 dark:border-gray-700">
          <div className="container mx-auto mt-8">
            <div className="mt-4">
              <div className="flex items-center">
                <button
                  onClick={handleAddNote}
                  className={`${
                    isNewNoteSaved
                      ? "bg-blue-500 hover:bg-blue-600"
                      : "bg-gray-400"
                  } text-white font-bold py-2 px-4 rounded ${
                    isNewNoteSaved ? "cursor-pointer" : "cursor-not-allowed"
                  }`}
                  disabled={!isNewNoteSaved}
                >
                  +
                </button>
              </div>
            </div>

            {notes.map((note) => (
              <Note
                key={note.id}
                id={note.id}
                title={note.title}
                description={note.description}
                onDelete={() => handleDelete(note.id)}
                onSave={() => handleSaveNote(note.id)}
                isNew={note.isNew}
                onCancelNewNote={handleCancelNewNote}
                onChange={(field, value) =>
                  handleNoteChange(note.id, field, value)
                }
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
