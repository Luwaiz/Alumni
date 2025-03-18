import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MyMemories from "./pages/MyMemories";
import Alumni from "./pages/Alumni";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import Navbar from "./components/NavBar";

function Routing() {
  return (
    <Router>
        <Navbar/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-memories" element={<MyMemories />} />
        <Route path="/alumni" element={<Alumni />} />
        <Route path="/my-profile" element={<Profile />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </Router>
  );
}

export default Routing;
