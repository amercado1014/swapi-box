import React from 'react';
import Card from '../Card/Card';
import './CardContainer.css';
import PropTypes from 'prop-types';

const CardContainer = ({cards, setFavorites, favorites}) => {
  const displayCards = cards.map(card => {
    if (favorites.includes(card)) {
      return <Card
        key={card.name}
        card={card}
        setFavorites={setFavorites}
        active={'active'} />;
    } else {
      return <Card 
        key={card.name} 
        card={card} 
        setFavorites={setFavorites} />;
    }
  });

  return (
    <div className='card-container'>
      {!cards.length &&
       <p className="select">Select a category</p>
      }
      {displayCards}
    </div>
  );
};

CardContainer.propTypes = {
  cards: PropTypes.array,
  setFavorites: PropTypes.func,
  favorites: PropTypes.array
};

export default CardContainer;