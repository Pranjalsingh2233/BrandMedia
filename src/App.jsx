import { useState } from "react";
import { MyContext } from "./MyContext";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Team from "./pages/TeamSection";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const providerValues = {};
  return (
    <MyContext.Provider value={providerValues}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/team" element={<Team />} />
      </Routes>
      <Footer />
    </MyContext.Provider>
  );
}

export default App;
