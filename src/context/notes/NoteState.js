import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:4500";
  const [notes, setNotes] = useState([]);
  console.log(notes)

  const getNotes = async() => {
   
    const res = await fetch(`${host}/api/note/fetchallnotes`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        'auth-token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ2NzhhZTRlMDYxMGIyZjEzNzZkODg3In0sImlhdCI6MTY4NDUwNzg5N30.qJK1kzrCnrTlSGHFyFiwP5XVD08EOWcbohPnHOUEZ5o'
      }
    });
   
    const json  = await res.json();
    console.log(json)
    setNotes(json);
  }
  const addNote = async(title, description, tag) => {
   
    const res = await fetch(`${host}/api/note/addnote`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'auth-token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ2NzhhZTRlMDYxMGIyZjEzNzZkODg3In0sImlhdCI6MTY4NDUwNzg5N30.qJK1kzrCnrTlSGHFyFiwP5XVD08EOWcbohPnHOUEZ5o'
      },
      body: JSON.stringify({title,description,tag})
    });
   
    const note = {
      "_id": "645f90ce94567495b0f9a872",
      "user": "645d09fc29f82500af4d529c",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2023-05-13T13:29:50.188Z",
      "__v": 0
    };
    setNotes(notes.concat(note));
  }

  const deleteNote = async(id) => {
    const res = await fetch(`${host}/api/note/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
        'auth-token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ2NzhhZTRlMDYxMGIyZjEzNzZkODg3In0sImlhdCI6MTY4NDUwNzg5N30.qJK1kzrCnrTlSGHFyFiwP5XVD08EOWcbohPnHOUEZ5o'
      }
    });
    const newNote = notes.filter((note) => note._id !== id);
    const json =await res.json();
    setNotes(newNote);
  }

  const editNote = async (id, title, description, tag) => {
    const res = await fetch(`${host}/api/note/updatenote/${id}`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'auth-token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ2NzhhZTRlMDYxMGIyZjEzNzZkODg3In0sImlhdCI6MTY4NDUwNzg5N30.qJK1kzrCnrTlSGHFyFiwP5XVD08EOWcbohPnHOUEZ5o'
      },
      body: JSON.stringify({title,description,tag})
    });
    const json =  res.json();
  
  for (let index = 0; index < notes.length; index++) {
    const element = notes[index];

    if (element._id === id) {
      element.title = title;
      element.description = description;
      element.tag = tag;
    }

  }
}


return (
  <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote,getNotes}}>
    {
      props.children
    }
  </NoteContext.Provider>
)
}

export default NoteState;