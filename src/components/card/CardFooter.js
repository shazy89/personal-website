import React from "react";

const CardFooter = ({ handleClick }) => {
  return (
    <div className="card__footer">
      <button className="card__button" onClick={handleClick}>
        hey
      </button>
      <a className="card__link" href="">
        you{" "}
      </a>
      <a className="card__link" href="">
        ok
      </a>
    </div>
  );
};

export default CardFooter;
