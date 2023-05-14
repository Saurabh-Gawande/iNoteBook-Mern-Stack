import React from "react";
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from "./Navbar";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./context/notes/NoteState";

const App = () => {

  return (<>
    <>
      <NoteState>
          <Navbar />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/about" element={<About />}></Route>
          </Routes>
        </div>
      </NoteState>
    </>
  </>
  )
}

export default App