import React from "react";
import {HashRouter, Routes, Route } from "react-router-dom";

import Nav from "./Components/Nav";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Section from "./Components/Section";
import Portfolio from "./Components/Portfolio";
import Footer from "./Components/footer";

function App() {
  return (
    <>
      <HashRouter>
      <Nav />
        <Routes>
          <Route exact path="/"  element={<Section />} />
          <Route path="/portfolio"  element={<Portfolio />} />
          <Route path="/about"  element={<About />} />
          <Route path="/contact" exact element={<Contact />} />
        </Routes>
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;
