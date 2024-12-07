import React from "react";
import "./Template.css";

export default function Template(props) {
  return (
    <div className="templateMain">
      <div className="template">
        <img className="carImage" src={props.src} alt={props.carName} />
        <div className="price">{props.price}</div>
        <div>{props.carName}</div>
        <div className="desc">{props.description}</div>
      </div>
    </div>
  );
}
