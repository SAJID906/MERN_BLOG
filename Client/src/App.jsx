import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Project from "./Pages/Project";
import Signin from "./Pages/Signin";
import SingUp from "./Pages/SingUp";
import Header from "./Components/Header";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<SingUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
