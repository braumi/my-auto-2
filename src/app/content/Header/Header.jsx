import React from "react";
import "./Header.css";
import Logo from "../components/Logo.jsx";
import Search from "../components/Search.jsx";
import About from "../components/AboutLink.jsx";
import Contact from "../components/ContactLink.jsx";
export default function Header() {
  return (
    <header>
      <div className="headerWrapper">
        <div className="left">
          <Logo />
          <Search />
        </div>
        <div className="right">
          <About />
          <Contact />
        </div>
      </div>
    </header>
  );
}
