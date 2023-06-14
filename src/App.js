// basic
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
// pages
import Home from "./pages/Home/Home";
import Resume from "./pages/Resume/Resume";
import Project from "./pages/Project/Project";
import Life from "./pages/Life/Life";
import Contact from "./pages/Contact/Contact";
// css file
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/project" element={<Project />} />
          <Route path="/life" element={<Life />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
