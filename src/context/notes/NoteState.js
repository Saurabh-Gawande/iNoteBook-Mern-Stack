import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:4500";
  const [notes, setNotes] = useState([]);

  const getNotes = async () => {
    const res = await fetch(`${host}/api/note/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ2NzhhZTRlMDYxMGIyZjEzNzZkODg3In0sImlhdCI6MTY4NDUwNzg5N30.qJK1kzrCnrTlSGHFyFiwP5XVD08EOWcbohPnHOUEZ5o",
      },
    });

    const json = await res.json();
    setNotes(json);
  };
  const addNote = async (title, description, tag) => {
    const res = await fetch(`${host}/api/note/addnote`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ2NzhhZTRlMDYxMGIyZjEzNzZkODg3In0sImlhdCI6MTY4NDUwNzg5N30.qJK1kzrCnrTlSGHFyFiwP5XVD08EOWcbohPnHOUEZ5o",
      },
      body: JSON.stringify({ title, description, tag }),
    });

    const note = await res.json();
    setNotes(notes.concat(note));
  };

  const deleteNote = async (id) => {
    const res = await fetch(`${host}/api/note/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ2NzhhZTRlMDYxMGIyZjEzNzZkODg3In0sImlhdCI6MTY4NDUwNzg5N30.qJK1kzrCnrTlSGHFyFiwP5XVD08EOWcbohPnHOUEZ5o",
      },
    });
    const newNote = notes.filter((note) => note._id !== id);
    const json = await res.json();
    console.log(json);
    setNotes(newNote);
  };

  const editNote = async (id, title, description, tag) => {
    const res = await fetch(`${host}/api/note/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ2NzhhZTRlMDYxMGIyZjEzNzZkODg3In0sImlhdCI6MTY4NDUwNzg5N30.qJK1kzrCnrTlSGHFyFiwP5XVD08EOWcbohPnHOUEZ5o",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = res.json();
    console.log(json);

    let newNotes = [...notes]; // Create a new array using the spread operator

    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];

      if (element._id === id) {
        // Update the properties of the specific note using the index
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes);
  };

  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
