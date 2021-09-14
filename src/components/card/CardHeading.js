//import { IndeterminateCheckBox } from '@material-ui/icons';
import React, { useMemo } from 'react';
const imageClassNames = {
  0: 'card__heading__img-all card__heading__img-1',
  1: 'card__heading__img-all card__heading__img-2',
  2: 'card__heading__img-all card__heading__img-3',
};
const CardHeading = ({ images, name }) => {
  const displayImages = useMemo(
    () =>
      images.map((image, index) => (
        <img
          key={index}
          className={`${imageClassNames[index]}`}
          src={image}
          alt="Ed shazimans project"
        />
      )),
    [images]
  );
  return (
    <div className="card__heading">
      <h4 className="card__heading__text">
        <span className="card__heading__text__span">{name}</span>
      </h4>
      <div className="card__heading__img">{displayImages}</div>
    </div>
  );
};

export default CardHeading;
