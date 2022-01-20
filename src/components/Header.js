import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="menuContainer">
      <h1>Mathemagicians</h1>
      <nav className="menuList">
        <Link to="/">Home</Link>
        |
        <Link to="/calculator">Cowculator</Link>
        |
        <Link to="/quote">Quote</Link>
      </nav>
    </header>
  );
}

export default Header;
