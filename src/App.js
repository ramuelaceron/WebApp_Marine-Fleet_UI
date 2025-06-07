import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Stream from './components/pages/Stream';
import AboutUs from "./components/pages/aboutUs";
import Login from "./components/pages/login";
import SignUp from "./components/pages/aboutUs";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stream" element={<Stream />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
    </Router>
    </>
  );
}

export default App;