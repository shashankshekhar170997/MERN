import { useState } from "react";
import noteContext from "./NoteContext";

const NoteState = (props) => {
  const initialNotes = [
    {
      _id: "65fd2130776b1aebe853cc60",
      user: "65f9727d6ee7eb47d7abbdf4",
      title: "My title1",
      description: "Please wake up ",
      tag: "personal",
      date: "2024-03-22T06:12:00.822Z",
      __v: 0,
    },
    {
      _id: "65fd21307736b1aebe853cc60",
      user: "65f9727d6ee7eb47d7abbdf4",
      title: "My title1",
      description: "Please wake up ",
      tag: "personal",
      date: "2024-03-22T06:12:00.822Z",
      __v: 0,
    },
    {
      _id: "65fd21301776b1aebe853cc60",
      user: "65f9727d6ee7eb47d7abbdf4",
      title: "My title1",
      description: "Please wake up ",
      tag: "personal",
      date: "2024-03-22T06:12:00.822Z",
      __v: 0,
    },
    {
      _id: "65fd2130776gb1aebe853cc60",
      user: "65f9727d6ee7eb47d7abbdf4",
      title: "My title1",
      description: "Please wake up ",
      tag: "personal",
      date: "2024-03-22T06:12:00.822Z",
      __v: 0,
    },
    {
      _id: "65fd21307376b1aebe853cc60",
      user: "65f9727d6ee7eb47d7abbdf4",
      title: "My title1",
      description: "Please wake up ",
      tag: "personal",
      date: "2024-03-22T06:12:00.822Z",
      __v: 0,
    },
    {
      _id: "65fd21307764b1aebe8533cc60",
      user: "65f9727d6ee7eb47d7abbdf4",
      title: "My title1",
      description: "Please wake up ",
      tag: "personal",
      date: "2024-03-22T06:12:00.822Z",
      __v: 0,
    },
  ];

  const [notes, setNotes] = useState(initialNotes);

  // Add a Note
  const addNote = (title, description, tag) => {
    const note = {
      _id: "65fd21307764b1aebe8533cc60",
      user: "65f9727d6ee7eb47d7abbdf4",
      title: title,
      description: description,
      tag: tag,
      date: "2024-03-22T06:12:00.822Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
    // concat returns new array.
  };
  // Delete a Note
  const deleteNote = () => {};
  // Edit a Note
  const editNote = () => {};
  return (
    <noteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
