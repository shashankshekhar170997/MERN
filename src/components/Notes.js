import React from "react";
import { useContext } from "react";
import noteContext from "../Context/Notes/NoteContext";
import NoteItems from "./NoteItems";

const Notes = () => {
  const context = useContext(noteContext);
  const { notes, setNotes } = context;
  return (
    <div>
      <div className="row my-3">
        <h2>Your Note</h2>
        {notes.map((note) => {
          return <NoteItems note={note} />;
        })}
      </div>
    </div>
  );
};

export default Notes;
