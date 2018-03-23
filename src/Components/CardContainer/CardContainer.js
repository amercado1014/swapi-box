import React from 'react';
import Card from '../Card/Card';
import './CardContainer.css';
import PropTypes from 'prop-types';

const CardContainer = ({cards, setFavorites}) => {
  const displayCards = cards.map(card => {
    return <Card 
      key={card.name} 
      info={card} 
      setFavorites={setFavorites} />;
  });
  return (
    <div>
      {displayCards}
    </div>
  );
};

CardContainer.propTypes = {
  cards: PropTypes.array,
  setFavorites: PropTypes.func
};

export default CardContainer;