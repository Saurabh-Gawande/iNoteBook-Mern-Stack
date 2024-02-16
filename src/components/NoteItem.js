import React, { useContext } from "react";
import NoteContext from "../context/notes/noteContext";

function NoteItem({ note, updatenote }) {
  const context = useContext(NoteContext);
  const { deleteNote } = context;

  return (
    <div className="col-md-3 mx-2 my-2" style={{ width: "100%" }}>
      <div className="card">
        <div className="card-body ">
          <div className="d-flex justify-content-between align-item-center">
            <div>
              <h5 className="card-title">{note.title}</h5>
              <p className="card-text">{note.description}</p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                flexDirection: "column",
                height: "8vh",
              }}
            >
              <i
                onClick={() => {
                  deleteNote(note._id);
                }}
                className="fa-solid fa-trash mx-2"
              ></i>
              <i
                onClick={() => {
                  updatenote(note);
                }}
                className="fa-solid fa-pen-to-square mx-2"
              ></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NoteItem;
