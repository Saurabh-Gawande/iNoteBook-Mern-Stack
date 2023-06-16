import React, { useContext } from 'react';
import NoteContext from '../context/notes/noteContext';

function NoteItem({ note, updatenote }) {
    const context = useContext(NoteContext);
    const {deleteNote} = context;

    return (
        <div className='col-md-3 mx-2 my-2'>
            <div className="card" style={{ width: "18rem" }}>
                <div className="card-body ">
                    <div className="d-flex justify-content-between align-item-center">
                        <h5 className="card-title">{note.title}</h5>
                        <div className="icon">
                            <i onClick={()=>{deleteNote(note._id)}} className="fa-solid fa-trash mx-2"></i>
                            <i onClick={()=>{updatenote(note)}} className="fa-solid fa-pen-to-square mx-2"></i>
                        </div>
                    </div>
                    <p className="card-text">{note.description}</p>
                </div>
            </div>
        </div>
    )
}

export default NoteItem;