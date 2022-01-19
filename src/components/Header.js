import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="menuContainer">
      <h1>Mathemagicians</h1>
      <ul className="menuList">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/calculator">Cowculator</Link></li>
        <li><Link to="/quote">Quote</Link></li>
      </ul>
    </nav>
  );
}

export default Header;
