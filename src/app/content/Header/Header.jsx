import React from "react";
import "./Header.css";
import Logo from "../components/Logo.jsx";
import Search from "../components/Search.jsx";
import Contact from "../components/ContactLink.jsx";
import Profile from "../components/ProfileLink.jsx";
export default function Header() {
  return (
    <header>
      <div className="headerWrapper">
        <div className="left">
          <Logo />
          <Search />
        </div>
        <div className="right">
          <Contact />
          <Profile />
        </div>
      </div>
    </header>
  );
}
