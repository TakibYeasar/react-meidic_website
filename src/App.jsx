import React from 'react';
import './App.css';
import { Navbar, Footer } from "./components";
import { Homepage, Aboutpage, Departmentpage, Contactpage } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/dept" element={<Departmentpage />} />
        <Route path="/contact" element={<Contactpage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
