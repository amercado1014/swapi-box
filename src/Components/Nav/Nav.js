import React from 'react';
import './Nav.css';
import PropTypes from 'prop-types';
import Icon from 'react-icons-kit';
import { user, starFull } from 'react-icons-kit/icomoon';
import { globe, aircraft } from 'react-icons-kit/entypo'; 

const Nav = ({fetchCards, favorites, displayFavorites}) => {
  return (
    <div className='nav'>
      <button className='people-button'
        onClick={() => fetchCards('people', 'peopleData')}
      ><Icon size={20} icon={user} /> People</button>
      <button className='planets-button'
        onClick={() => fetchCards('planets', 'planetData')}
      ><Icon size={20} icon={globe} /> Planets</button>
      <button className='vehicles-button'  
        onClick={() => fetchCards('vehicles', 'vehicleData')}
      ><Icon size={20} icon={aircraft} /> Vehicles</button>
      <button className='favorites-button'
        onClick={() => displayFavorites('favorites')}> 
        <Icon size={20} icon={starFull} /> Favorites <span 
          className='favorites-number'>
          {favorites.length}
        </span>
      </button>
    </div>
  );
};

Nav.propTypes = {
  fetchCards: PropTypes.func,
  favorites: PropTypes.array,
  displayFavorites: PropTypes.func
};

export default Nav;