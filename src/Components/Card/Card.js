import React from 'react';
import './Card.css';

const Card = ({info}) => {
  const keys = Object.keys(info.data)
  const cardInfo = keys.map((key, index) => {
    return <p key={index}>{key}: {info.data[key]}</p>;
  });
  return (
    <div className={info.class}>
      <h2>{info.name}</h2>
      {cardInfo}
    </div>
  );
};

export default Card;