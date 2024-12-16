import React from "react";
import "./Profile.css";

export default function About() {
  return (
    <div className="profile">
      <div className="profile-wrapper">
        <div className="profile-image">
          <img
            className="cat-img"
            src="/img/dalacatito.jfif"
            alt="Just a fat cat"
          ></img>
        </div>

        <div className="profile-details">
          <div className="hello-text">
            Hello, <br></br>George Kutateladze
          </div>

          <div className="profile-email">@gio.kutateladze.1@suckme.off.ge</div>
        </div>
      </div>
    </div>
  );
}
