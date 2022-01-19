import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="menuContainer">
      <h1>Mathemagicians</h1>
      <ul className="menuList">
        <li><Link to="/" style={{ color: 'aliceblue' }}>Home</Link></li>
        <li><Link to="/calculator" style={{ color: 'aliceblue' }}>Cowculator</Link></li>
        <li><Link to="/quote" style={{ color: 'aliceblue' }}>Quote</Link></li>
      </ul>
    </nav>
  );
}

export default Header;
