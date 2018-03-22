import React from 'react';
import './Nav.css';

const Nav = ({setCards}) => {
  return (
    <div>
      <button onClick={() => setCards('people', 'peopleData')}>People</button>
      <button onClick={() => setCards('planets', 'planetData')}>Planets</button>
      <button onClick={() => setCards('vehicles', 'vehicleData')}>Vehicles</button>
    </div>
  );
};

export default Nav;