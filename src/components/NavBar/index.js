import React from "react";

function NavBar({ handleLoginClick }) {
  const handleClick = () => {
    handleLoginClick();
  };
  
  return (
<div className="navbar">

<div className="navbar-brand">
        <h2>
          <a href="/" className="navbar-title">Alex's Salon</a>
        </h2>
      </div>

      <div className="navbar-menu">
        <ul className="navbar-list">
          <li className="navbar-item">
            <a href="#about" className="navbar-link">
              About
            </a>
          </li>

          <li className="navbar-item">
            <a href="#stylists" className="navbar-link">
              Stylists
            </a>
          </li>

          <li className="navbar-item">
            <a href="#appointments" className="navbar-link">
              Appointments
            </a>
          </li>

          <li className="navbar-item">
            <a href="#contact" className="navbar-link">
              Contact
            </a>
          </li>
          
        </ul>
      </div>
      
      <div>
        <span onClick={handleClick} className="loginicon">
          Sign In
        </span>
      </div>

    
    </div>
  );
}

export default NavBar;
