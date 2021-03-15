import React from "react";
import { icons } from "../portfolio/Icons";

const CardContent = ({ info }) => {
  return (
    <div className="card__content--container">
      <div className="card__content--project">
        <p>{info}</p>
      </div>
      <div>
        {" "}
        <ul className="card__content--technologies">
          <li className="card__content--technologies-icon">{icons.react}</li>
          <li className="card__content--technologies-icon">{icons.redux}</li>
          <li className="card__content--technologies-icon">{icons.css}</li>
        </ul>
      </div>
    </div>
  );
};

export default CardContent;
