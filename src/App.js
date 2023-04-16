import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/home";
import Services from "./pages/services";
import Contact from "./pages/contact";
import SignIn from "./pages/signIn";
import SignUp from "./pages/signUp";
import About from "./pages/about";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import "./App.css";


function App() {
  return (
    <Router basename="/healing-hands">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/signIn" element={<SignIn />} />
      </Routes>
      <Footer />
    </Router>
  );
}


export default App;
