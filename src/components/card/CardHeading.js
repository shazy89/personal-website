import React from "react";

const CardHeading = ({ images, name }) => {
  return (
    <div className="card__heading">
      <h4 className="card__heading__text">
        <span className="card__heading__text__span">{name}</span>
      </h4>
      <div className="card__heading__img">
        <img
          className="card__heading__img-all card__heading__img-1"
          src={images[0]}
          alt="Ed shazimans project image"
        />
        <img
          className="card__heading__img-all card__heading__img-2"
          src={images[1]}
          alt="Ed shazimans project image"
        />
        <img
          className="card__heading__img-all card__heading__img-3"
          src={images[2]}
          alt="Ed shazimans project image"
        />
      </div>
    </div>
  );
};

export default CardHeading;
