import React from 'react';
import './Card.css';
import PropTypes from 'prop-types';
import Icon from 'react-icons-kit';
import { starFull } from 'react-icons-kit/icomoon';

const Card = ({card, setFavorites, active}) => {
  const keys = Object.keys(card.data);
  const cardInfo = keys.map((key, index) => {
    return <p key={index}>{key}: {card.data[key]}</p>;
  });
  return (
    <div className={`card ${card.class}`}>
      <button className={`star-button ${active}`}  
        onClick={() => setFavorites(card)}>
        <Icon size={20} icon={starFull} />
      </button>
      <h2>{card.name}</h2>
      {cardInfo}
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.object,
  setFavorites: PropTypes.func,
  active: PropTypes.string
};

export default Card;