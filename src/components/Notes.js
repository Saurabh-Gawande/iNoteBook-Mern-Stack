import React, { useContext } from 'react';
import NoteContext from '../context/notes/noteContext';
import AddNote from './AddNote';
import NoteItem from './NoteItem';

function Notes() {
  const context = useContext(NoteContext);
  const { notes } = context;
  return (
    <>
      <AddNote />
      <div className="row my-3">
        <h2>Your Notes</h2>
        {
          notes.map((note, index) => (
            <NoteItem note={note} key={index} />
          ))
        }
      </div>
    </>
  )
}

export default Notes
