import React from "react";
import { Routes, Route } from "react-router-dom"
import { About } from "./section/About";
import { Contact } from "./section/Contact";
import { Projects } from "./section/Projects";

function App() {
  console.log("hello")
  return (
    <Routes>
      <Route path="/" element={<About/>} />
      <Route path="/project" element={<Projects/>} />
      <Route path="/contact" element={<Contact/>} />
    </Routes>
  )
}

export default App
