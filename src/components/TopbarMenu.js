import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import './TopbarMenu.css';

function TopbarMenu() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <div className="topbar">
      <div className="topbar-container">
        <div className="logo">
          <h3>MyWishes</h3>
        </div>

        <div className="menu-icon" onClick={toggleMenu}>
          <FaBars />
        </div>

        <ul className={showMenu ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <a href="/" className="nav-link">Home</a>
          </li>
          <li className="nav-item">
            <a href="/about" className="nav-link">About Us</a>
          </li>
          <li className="nav-item">
            <a href="/contact" className="nav-link">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TopbarMenu;