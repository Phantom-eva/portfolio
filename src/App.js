import {React, useState, useEffect} from 'react';
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom"
// css file
import './App.css';
// components
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Preloader from './components/Preloader'
import Scroll from './components/Scroll'
// pages
import Home from './pages/Home'
import Life from './pages/Life'
import Project from './pages/Project'
import Resume from './pages/Resume'
import Contact from './pages/Contact'


function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);
  return(
    <BrowserRouter>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <Scroll />
        <Routes>
          <Route path="/" element={Home} />
          <Route path="/project" element={Project} />
          <Route path="/resume" element={Resume} />
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
