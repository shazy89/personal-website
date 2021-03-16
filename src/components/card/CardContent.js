import React from "react";
import { icons } from "../portfolio/Icons";

const CardContent = ({ info, technologiesForIcons }) => {
  const displayLogos = technologiesForIcons.map((tec) => {
    return (
      <li key={tec} className="card__content--technologies-icon">
        {icons[tec]}
      </li>
    );
  });

  return (
    <div className="card__content--container">
      <div className="card__content--project">
        <p>{info}</p>
      </div>
      <div>
        {" "}
        <ul className="card__content--technologies">{displayLogos}</ul>
      </div>
    </div>
  );
};

export default CardContent;
