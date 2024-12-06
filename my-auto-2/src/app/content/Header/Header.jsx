import React from "react";
import "./Header.css";
import Logo from "../components/Logo.jsx";
import Search from "../components/Search.jsx";
import About from "../components/About.jsx";
import Contact from "../components/Contact.jsx";
import PlusBtn from "../buttons/PlusBtn.jsx";

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
          <PlusBtn />
        </div>
      </div>
    </header>
  );
}
