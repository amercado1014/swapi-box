import React from 'react';
import './Summary.css';
import PropTypes from 'prop-types';

const Summary = ({film}) => {
  const { episode, title, text, date } = film;
  let textParagraphs;

  if (text) {
    textParagraphs = 
    text.map((paragraph, index) => <p key={index}>{paragraph}</p>);
  }

  return (
    <div className="summary">
      <section className="film">
        <h1>Episode {episode}</h1>
        <h1>{title}</h1>
        <div className='film-text'>
          {textParagraphs}
        </div>
        <p>Film Released:</p> 
        <p>{date}</p>
      </section>
    </div> 
  );
};

Summary.propTypes = {
  film: PropTypes.object
};

export default Summary;