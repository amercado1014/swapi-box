import React from 'react';
import './Nav.css';
import PropTypes from 'prop-types';

const Nav = ({fetchCards, favorites, displayFavorites}) => {
  return (
    <div>
      <button 
        onClick={() => fetchCards('people', 'peopleData')}
      >People</button>
      <button 
        onClick={() => fetchCards('planets', 'planetData')}
      >Planets</button>
      <button 
        onClick={() => fetchCards('vehicles', 'vehicleData')}
      >Vehicles</button>
      <button
        onClick={() => displayFavorites('favorites')}
      >Favorites: <span>{favorites.length}</span></button>
    </div>
  );
};

Nav.propTypes = {
  fetchCards: PropTypes.func,
  favorites: PropTypes.array,
  displayFavorites: PropTypes.func
};

export default Nav;