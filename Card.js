import React from 'react';
import NavbarUser from './NavbarUser';

const Card = ({ imageSrc, title, description }) => {
  return (
  <div>
    <div className="card">
      <img src={imageSrc} alt={title} className="card__image" />
      <div className="card__content">
        <h3 className="card__title">{title}</h3>
        <p className="card__description">{description}</p>
      </div>
    </div>
  </div>
  );
};

export default Card;