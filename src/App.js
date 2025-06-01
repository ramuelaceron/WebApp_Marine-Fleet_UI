import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Cards from './components/pages/Stream';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stream" element={<Cards />} />
          {/* <Route path="/prototype" element={<Prototype />} /> */}
        </Routes>
    </Router>
    </>
  );
}

export default App;
