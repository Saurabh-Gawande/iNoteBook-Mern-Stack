import React, { useContext, useState } from "react";
import NoteContext from "../context/notes/noteContext";
import "../Style/Note.css";

const AddNote = () => {
  const context = useContext(NoteContext);

  const [note, setNotes] = useState({ title: " ", description: " ", tag: "" });

  const { addNote } = context;

  function handleClick(e) {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNotes({ title: " ", description: " ", tag: "" });
  }

  function onchange(e) {
    setNotes({ ...note, [e.target.name]: e.target.value });
  }

  return (
    <div className="addNote">
      <div className="addNoteHeading">
        <h2>Add a Note</h2>
      </div>
      <form>
        <div class="form-row">
          <div class="form-group mb-2">
            <input
              onChange={onchange}
              type="text"
              value={note.title}
              className="form-control"
              id="title"
              name="title"
              aria-describedby="emailHelp"
              minLength={5}
              required
            />
            <label htmlFor="title" className="form-label">
              Title
            </label>
          </div>
          <div class="form-group mb-2">
            <input
              onChange={onchange}
              type="text"
              value={note.description}
              className="form-control"
              id="description"
              name="description"
              minLength={5}
              required
            />
            <label htmlFor="description" className="form-label">
              Description
            </label>
          </div>
          <div class="form-group mb-2">
            <input
              onChange={onchange}
              type="text"
              value={note.tag}
              className="form-control"
              id="tag"
              name="tag"
            />
            <label htmlFor="tag" className="form-label">
              Tag
            </label>
          </div>
          <button
            disabled={note.title.length < 5 || note.description.length < 5}
            onClick={handleClick}
            type="submit"
            className="btn btn-primary"
          >
            Add Note
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNote;
