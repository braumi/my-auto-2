import React from "react";
import Template from "../content/components/Template";
import { dataForCars } from "../content/components/Data";
import { data } from "react-router-dom";

export default function Main() {
  return (
    <div className="main">
      {dataForCars.map((car, index) => (
        <Template
          key={index}
          src={car.src}
          carName={car.carName}
          price={car.price}
          description={car.description}
        />
      ))}
    </div>
  );
}
