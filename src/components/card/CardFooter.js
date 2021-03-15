import React from "react";

const CardFooter = ({ handleClick, github, mobGithub }) => {
  return (
    <div className="card__footer">
      <button className="card__button" onClick={handleClick}>
        Demo
      </button>
      <a
        className=""
        href={`https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md`}
        target="_blank"
        rel="noreferrer"
      >
        GitHub{" "}
      </a>

      {mobGithub && (
        <a
          className="card__link"
          href={mobGithub}
          target="_blank"
          rel="noreferrer"
        >
          GitHub Mobile App
        </a>
      )}
    </div>
  );
};

export default CardFooter;
