import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

const getLocalItems = () => {
  let list = localStorage.getItem("keep");

  if (list) {
    return JSON.parse(list);
  } else {
    return [];
  }
};

function App() {
  const [notes, setNotes] = useState(getLocalItems());
  const [theme, setTheme] = useState("light-theme");
  
  const toggleTheme = () => {
    if (theme === "dark-theme") {
      setTheme("light-theme");
    } else {
      setTheme("dark-theme");
    }
  };

  
  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }
  
  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }
  
  useEffect(() => {
    localStorage.setItem("keep", JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div>
      <Header toggle={toggleTheme} />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
