import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const notesInitial = [
    {
      "_id": "645e6971c11b0fb08d4b0882",
      "user": "645d09fc29f82500af4d529c",
      "title": "potato",
      "description": "revenge of potato",
      "tag": "denger",
      "date": "2023-05-12T16:29:37.312Z",
      "__v": 0
    },
    {
      "_id": "645f90ce94567495b0f9a872",
      "user": "645d09fc29f82500af4d529c",
      "title": "Margerita pizza",
      "description": "I will kill you",
      "tag": "food",
      "date": "2023-05-13T13:29:50.188Z",
      "__v": 0
    },
    {
      "_id": "645e6971c11b0fb08d4b0882",
      "user": "645d09fc29f82500af4d529c",
      "title": "potato",
      "description": "revenge of potato",
      "tag": "denger",
      "date": "2023-05-12T16:29:37.312Z",
      "__v": 0
    },
    {
      "_id": "645f90ce94567495b0f9a872",
      "user": "645d09fc29f82500af4d529c",
      "title": "Margerita pizza",
      "description": "I will kill you",
      "tag": "food",
      "date": "2023-05-13T13:29:50.188Z",
      "__v": 0
    },
    {
      "_id": "645e6971c11b0fb08d4b0882",
      "user": "645d09fc29f82500af4d529c",
      "title": "potato",
      "description": "revenge of potato",
      "tag": "denger",
      "date": "2023-05-12T16:29:37.312Z",
      "__v": 0
    },
    {
      "_id": "645f90ce94567495b0f9a872",
      "user": "645d09fc29f82500af4d529c",
      "title": "Margerita pizza",
      "description": "I will kill you",
      "tag": "food",
      "date": "2023-05-13T13:29:50.188Z",
      "__v": 0
    },
    {
      "_id": "645e6971c11b0fb08d4b0882",
      "user": "645d09fc29f82500af4d529c",
      "title": "potato",
      "description": "revenge of potato",
      "tag": "denger",
      "date": "2023-05-12T16:29:37.312Z",
      "__v": 0
    },
    {
      "_id": "645f90ce94567495b0f9a872",
      "user": "645d09fc29f82500af4d529c",
      "title": "Margerita pizza",
      "description": "I will kill you",
      "tag": "food",
      "date": "2023-05-13T13:29:50.188Z",
      "__v": 0
    },
    {
      "_id": "645e6971c11b0fb08d4b0882",
      "user": "645d09fc29f82500af4d529c",
      "title": "potato",
      "description": "revenge of potato",
      "tag": "denger",
      "date": "2023-05-12T16:29:37.312Z",
      "__v": 0
    },
    {
      "_id": "645f90ce94567495b0f9a872",
      "user": "645d09fc29f82500af4d529c",
      "title": "Margerita pizza",
      "description": "I will kill you",
      "tag": "food",
      "date": "2023-05-13T13:29:50.188Z",
      "__v": 0
    },
  ]
  const [notes, setNotes] = useState(notesInitial);

  const addNote = (title, description, tag) => {
    console.log('adding a new note')
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
  const deleteNote = () => {

  }
  const editNote = () => {

  }


  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
      {
        props.children
      }
    </NoteContext.Provider>
  )
}

export default NoteState;