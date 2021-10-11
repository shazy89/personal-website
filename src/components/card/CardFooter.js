import React from 'react';

const CardFooter = ({ project: { github, mobGithub, demo, webApp } }) => {
  return (
    <div className="card__footer">
      {webApp ? (
        <a
          className="card__link"
          href={webApp}
          target="_blank"
          rel="noreferrer"
        >
          Website
        </a>
      ) : null}
      {demo ? (
        <a className="card__link" href={demo} target="_blank" rel="noreferrer">
          Demo
        </a>
      ) : null}
      {github && (
        <a
          className="card__link"
          href={github}
          target="_blank"
          rel="noreferrer"
        >
          GitHub{' '}
        </a>
      )}
      {mobGithub ? (
        <a
          className="card__link"
          href={mobGithub}
          target="_blank"
          rel="noreferrer"
        >
          GitHub MobileApp{' '}
        </a>
      ) : null}
    </div>
  );
};

export default CardFooter;
