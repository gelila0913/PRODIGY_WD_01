import React, { useState } from "react";
import "./Header.css";
import { Search, User, Menu, X } from "lucide-react";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <header className="header">
      <div className="header-left">
        <div className="logo">
          <h2>JOYVIEW</h2>
        </div>
        
        {/* Toggle 'active' class based on state */}
        <nav className={`nav ${isMobile ? "nav-active" : ""}`}>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Shows</a></li>
            <li><a href="#">Movies</a></li>
            <li><a href="#">Games</a></li>
            <li><a href="#">MyList</a></li>
          </ul>
        </nav>
      </div>

      <div className="header-right">
        <div className="search-box">
          <Search className="search-icon" size={18} />
          <input type="text" placeholder="Search" />
        </div>
        
        <ul className="user-nav">
          <li className="kids-label">Kids</li>
          <li><User className="icon" size={20} /></li>
        </ul>

        {/* Hamburger Icon */}
        <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
          {isMobile ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>
    </header>
  );
};

export default Header;