import React from 'react';
import './Card.css';

const Card = ({info, setFavorites}) => {
  const keys = Object.keys(info.data);
  const cardInfo = keys.map((key, index) => {
    return <p key={index}>{key}: {info.data[key]}</p>;
  });
  return (
    <div className={info.class}>
      <h2>{info.name} 
        <button onClick={() => setFavorites(info)}>
          &#9733;
        </button>
      </h2>
      {cardInfo}
    </div>
  );
};

export default Card;