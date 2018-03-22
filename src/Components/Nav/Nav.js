import React from 'react';
import './Nav.css';

const Nav = ({setCards}) => {
  return (
    <div>
      <button onClick={() => setCards('people')}>People</button>
      <button onClick={() => setCards('planets')}>Planets</button>
      <button onClick={() => setCards('vehicles')}>Vehicles</button>
    </div>
  );
};

export default Nav;