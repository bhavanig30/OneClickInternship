import React from 'react';
import './Header.css'; // Import the Header CSS file

const Header = () => {
  return (
    <header>
      {/* Logo */}
      <a href="#" className="logo">One Click Internship</a>

      {/* Navigation Bar */}
      <nav>
        <a href="#">Home</a>
        <a href="#">About Us</a>
        <a href="#">Internship Opportunities</a>
        <a href="#">Contact Us</a>
        <a href="#">FAQ</a>
        <a href="#">Sign In/Sign Up</a>
      </nav>

      {/* Search Bar */}
      <div className="search-container">
        <input type="text" placeholder="Search internships..." />
        <button>Search</button>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="menu-toggle">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </header>
  );
};

export default Header;
