import React from "react";
import noteContext from "../Context/Notes/NoteContext";
import { useContext } from "react";
const AddNote = () => {
  const context = useContext(noteContext);
  const { addNote } = context;
  const handleClick= ()=>{

  }
  const onChange = ()=>{
    
  }
  return (
    <div>
      <div className="container my-3">
        <h1>Add a Note</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="text"
              aria-describedby="emailHelp"
              name="title"
              onChange={onChange}
            />
          
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id="desc"
              name="desc"
              onChange={onChange}

            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" className="btn btn-primary" onClick={handleClick}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNote;
