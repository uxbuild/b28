import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Main from "./components/Main";

function App() {
  return (
    <div id="container">
      <Nav />
      <Main />
    </div>
  );
}

export default App;
