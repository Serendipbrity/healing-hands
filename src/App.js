import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Services from "./pages/services";
import Contact from "./pages/contact";
import SignIn from "./pages/signIn";
import SignUp from "./pages/signUp";
import About from "./pages/about";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { HashRouter as Router, Routes, Route, } from "react-router-dom";
import "./css/index.css";


function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<About/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/bookNow" element={<Services />} />
      </Routes>
      <Footer />
    </Router>
  );
}


export default App;
