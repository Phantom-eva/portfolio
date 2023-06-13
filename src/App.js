// basic
import { React, useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
// components
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
// import Preloader from "./components/Preloader";
import Scroll from "./components/Scroll";
// pages
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Project from "./pages/Project";
import Life from "./pages/Life";
import Contact from "./pages/Contact";
// css file
import "./assets/App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={Home} />
          <Route path="/resume" element={Resume} />
          <Route path="/project" element={Project} />
          <Route path="/life" element={Life} />
          <Route path="/contact" element={Contact} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
