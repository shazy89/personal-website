import React from "react";

const CardFooter = ({ github, mobGithub, demo }) => {
  return (
    <div className="card__footer">
      <a className="card__link" href={demo} target="_blank" rel="noreferrer">
        Demo
      </a>
      <a className="card__link" href={github} target="_blank" rel="noreferrer">
        GitHub{" "}
      </a>
      {mobGithub && (
        <a
          className="card__link"
          href={mobGithub}
          target="_blank"
          rel="noreferrer"
        >
          GitHub MobileApp{" "}
        </a>
      )}
    </div>
  );
};

export default CardFooter;
