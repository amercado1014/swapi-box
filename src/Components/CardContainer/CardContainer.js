import React from 'react';
import Card from '../Card/Card'
import './CardContainer.css';

const CardContainer = ({cards}) => {
  const displayCards = cards.map(card => {
    return <Card 
      key={card.name} 
      info={card} />;
  });
  return (
    <div>
      {displayCards}
    </div>
  );
};

export default CardContainer;