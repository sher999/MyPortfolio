import React from "react";
import Home from "./components/Home";
import "./App.css";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Links from "./components/Links";

export default function App() {
  return (
    <div className="App-header">
      <Navbar />
      <Home />
      <About />
      <Contact />
      <Links/>
    </div>
  );
}
