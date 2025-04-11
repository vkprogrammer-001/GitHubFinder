import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ThemeContext from '../context/ThemeContext';
import '../styles/component-styles.css';
import '../styles/theme.css';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const { darkMode } = useContext(ThemeContext);
  
  return (
    <header className={darkMode ? 'dark-mode' : ''}>
      <nav className="navbar">
        <div className="nav-brand">
          <img src="/logo192.png" alt="Github Finder" width={40} height={40}/>
          <span className="brand-name">GitHub Finder</span>
        </div>
        
        <ul className="nav-list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/search">Search</Link>
          </li>
          <li>
            <a href="#about-us">About</a>
          </li>
          <li>
            <a href="#contact-us">Contact</a>
          </li>
          <li className="theme-toggle-container">
            <ThemeToggle />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
