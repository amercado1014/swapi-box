import React from 'react';
import './Summary.css';
import PropTypes from 'prop-types';

const Summary = ({film}) => {
  return (
    <div className="summary">
      <div className="fade">
        <section className="star-wars">
          <div className="crawl">
            <div className="title">
              <p>Episode {film.episode}</p>
              <h1>{film.title}</h1>
            </div>
            <p>{film.text}</p>
          </div>
        </section>
      </div>
    </div>
  );
};

Summary.propTypes = {
  film: PropTypes.object
};

export default Summary;