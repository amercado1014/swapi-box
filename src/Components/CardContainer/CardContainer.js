import React from 'react';
import Card from '../Card/Card';
import './CardContainer.css';

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

export default CardContainer;