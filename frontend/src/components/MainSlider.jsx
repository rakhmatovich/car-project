import React, { useState } from "react";
import { sliderCars } from "../utils/cars";
import { Link } from "react-router-dom";

export default function MainSlider() {
  const [active, setActive] = useState(0);

  return (
    <div className="main-slider">
      <h1 className="ms-title">Модели Kia</h1>
      <div className="ms-names">
        {sliderCars.map((car, index) => (
          <p
            onClick={() => setActive(index)}
            key={car.id}
            className={`ms-name ${index === active && "ms-active"}`}
          >
            {car.name}
          </p>
        ))}
      </div>
      <Link to={`/car/${active}`}>
        <img
          className="ms-image"
          src={sliderCars[active].url}
          alt={sliderCars[active].name}
        />
      </Link>
    </div>
  );
}
