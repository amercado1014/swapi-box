import React from 'react';
import './Card.css';
import PropTypes from 'prop-types';

const Card = ({card, setFavorites}) => {
  const keys = Object.keys(card.data);
  const cardInfo = keys.map((key, index) => {
    return <p key={index}>{key}: {card.data[key]}</p>;
  });
  return (
    <div className={card.class}>
      <h2>{card.name} 
        <button onClick={() => setFavorites(card)}>
          &#9733;
        </button>
      </h2>
      {cardInfo}
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.object,
  setFavorites: PropTypes.func
};

export default Card;