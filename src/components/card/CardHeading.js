import React from "react";

const CardHeading = () => {
  return (
    <div className="card__heading">
      <h4 className="card__heading__text">
        <span className="card__heading__text__span">HEY YOU</span>
      </h4>
      <div className="card__heading__img">
        <img
          className="card__heading__img-all card__heading__img-1"
          src="https://res.cloudinary.com/dytheecsk/image/upload/v1610213769/Screen_Shot_2021-01-09_at_12.35.15_PM_zxwj2y.png"
          alt=""
        />
        <img
          className="card__heading__img-all card__heading__img-2"
          src="https://res.cloudinary.com/dytheecsk/image/upload/v1605120202/portfolio/rm2_a8rfve.png"
          alt=""
        />
        <img
          className="card__heading__img-all card__heading__img-3"
          src="https://res.cloudinary.com/dytheecsk/image/upload/v1605120212/portfolio/rm3_vgeuvx.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default CardHeading;
