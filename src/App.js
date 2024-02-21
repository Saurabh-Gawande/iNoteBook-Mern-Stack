import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./context/notes/NoteState";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import ProtectedRoute from "./components/ProtectedRoute";
import Unauthenticated from "./components/Unauthenticated";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <>
      <NoteState>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100vh",
          }}
        >
          <Navbar />
          <div
            style={{ flex: 1, backgroundColor: "#eeeeee", overflowY: "auto" }}
          >
            <Routes>
              <Route exact path="/signup" element={<SignUp />} />
              <Route element={<ProtectedRoute />}>
                <Route exact path="/home" element={<Home />} />
              </Route>
              <Route exact path="/" element={<Login />} />
              <Route exact path="/about" element={<About />} />
              <Route
                exact
                path="/unautheticated"
                element={<Unauthenticated />}
              />
              <Route exact path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </NoteState>
    </>
  );
};

export default App;
