import React, { useContext, useState } from "react";
import NoteContext from "../context/notes/noteContext";

const AddNote = () => {
  const context = useContext(NoteContext);

  const [note, setNotes] = useState({ title: " ", description: " ", tag: "default" });

  const { addNote } = context;

  function handleClick(e) {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
  }

  function onchange(e) {
    setNotes({ ...note, [e.target.name]: e.target.value });
  }


  return (
    <div className="container my-3">
      <h2>Add a Note</h2>
      <form className='my-3'>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input onChange={onchange} type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <input onChange={onchange} type="text" className="form-control" id="description" name="description" />
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">Tag</label>
          <input onChange={onchange} type="text" className="form-control" id="tag" name="tag" />
        </div>
        <button onClick={handleClick} type="submit" className="btn btn-primary" >Add Note</button>
      </form>
    </div>
  )
}

export default AddNote;