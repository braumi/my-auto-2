import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./app/Main/Main";
import Header from "./app/content/Header/Header";
import Footer from "./app/content/Footer/Footer";
import Contact from "./app/Contact/Contact";
import About from "./app/About/About";
import Assignment3 from "./app/Assignment3/Assignment3";
import "./Layout.css";

function Layout({ children }) {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/assignment3" element={<Assignment3 />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default Layout;
