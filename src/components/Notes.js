import React, { useContext, useEffect, useRef, useState } from "react";
import NoteContext from "../context/notes/noteContext";
import AddNote from "./AddNote";
import NoteItem from "./NoteItem";

function Notes() {
  const ref = useRef(null);
  const context = useContext(NoteContext);
  const { notes, getNotes, editNote } = context;
  const [note, setNote] = useState({
    id: "",
    etitle: " ",
    edescription: " ",
    etag: " ",
  });

  useEffect(() => {
    getNotes();
    // eslint-disable-next-line
  }, [notes]);

  function handleClick(e) {
    editNote(note.id, note.etitle, note.edescription, note.etag);
    ref.current.click();
    console.log(note);
  }

  function onchange(e) {
    setNote({ ...note, [e.target.name]: e.target.value });
  }

  function updatenote(CurrentNote) {
    ref.current.click();
    setNote({
      id: CurrentNote._id,
      etitle: CurrentNote.title,
      edescription: CurrentNote.description,
      etag: CurrentNote.tag,
    });
  }

  return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 50vw)",
          flex: "1",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AddNote />
        </div>
        <div>
          <h2>Your Notes</h2>
          <div>{notes.length === 0 && "no notes to display"}</div>
          {notes.map((note, index) => (
            <NoteItem note={note} updatenote={updatenote} key={index} />
          ))}
        </div>
      </div>
      <button
        ref={ref}
        type="button"
        style={{ display: "none" }}
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Edit Note
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="container my-3">
                <form className="my-3">
                  <div className="mb-3">
                    <label htmlFor="etitle" className="form-label">
                      Title
                    </label>
                    <input
                      onChange={onchange}
                      value={note.etitle}
                      type="text"
                      className="form-control"
                      id="etitle"
                      name="etitle"
                      aria-describedby="emailHelp"
                      minLength={5}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="edescription" className="form-label">
                      Description
                    </label>
                    <input
                      onChange={onchange}
                      value={note.edescription}
                      type="text"
                      className="form-control"
                      id="edescription"
                      name="edescription"
                      minLength={5}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="etag" className="form-label">
                      Tag
                    </label>
                    <input
                      onChange={onchange}
                      value={note.etag}
                      type="text"
                      className="form-control"
                      id="etag"
                      name="etag"
                    />
                  </div>
                </form>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                disabled={
                  note.etitle.length < 5 || note.edescription.length < 5
                }
                onClick={handleClick}
                type="button"
                className="btn btn-primary"
              >
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notes;
