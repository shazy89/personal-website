import React from "react";

const CardFooter = ({ handleClick, github, mobGithub, demo }) => {
  return (
    <div className="card__footer">
      <a
        className="card__link"
        href="https://www.youtube.com/watch?v=IEPtg8YQBbI&list=PL0zbnzgKNis1xNPhk3jmGx_KhQgK1SzaS&index=8&t=4s"
        target="_blank"
        rel="noreferrer"
      >
        Demo
      </a>
      <a
        className="card__link"
        href={`https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md`}
        target="_blank"
        rel="noreferrer"
      >
        GitHub{" "}
      </a>
    </div>
  );
};

export default CardFooter;
