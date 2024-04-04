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
      _id: "65fd2130776b1aebe853cc60",
      user: "65f9727d6ee7eb47d7abbdf4",
      title: "My title1",
      description: "Please wake up ",
      tag: "personal",
      date: "2024-03-22T06:12:00.822Z",
      __v: 0,
    },
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
      _id: "65fd2130776b1aebe853cc60",
      user: "65f9727d6ee7eb47d7abbdf4",
      title: "My title1",
      description: "Please wake up ",
      tag: "personal",
      date: "2024-03-22T06:12:00.822Z",
      __v: 0,
    },
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
      _id: "65fd2130776b1aebe853cc60",
      user: "65f9727d6ee7eb47d7abbdf4",
      title: "My title1",
      description: "Please wake up ",
      tag: "personal",
      date: "2024-03-22T06:12:00.822Z",
      __v: 0,
    },
  ];

  const [notes, setNotes] = useState(initialNotes);
  return (
    <noteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
