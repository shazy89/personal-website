import React from "react";
import { icons } from "../portfolio/Icons";

const CardContent = ({ info, technologiesForIcons }) => {
  console.log(technologiesForIcons);
  const displayLogos = technologiesForIcons.map((asd) => {
    return <li className="card__content--technologies-icon">{icons[asd]}</li>;
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
