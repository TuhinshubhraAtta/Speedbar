import React from "react";
import { Footer, Header, About } from "./containers";
import { Navbar, Resources, Features } from "./components";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
