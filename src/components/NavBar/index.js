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

        <ul className="navbar-list">
          <li className="navbar-item">
            <a href="#about" className="navbar-link">
              About
            </a>
          </li>

          <li className="navbar-item">
            <a href="#stylist" className="navbar-link">
              Stylists
            </a>
          </li>

          <li className="navbar-item">
            <a href="#appointment" className="navbar-link">
              Appointments
            </a>
          </li>

          <li className="navbar-item">
            <a href="#contact" className="navbar-link">
              Contact
            </a>
          </li>
          
        </ul>
      
      <div>
        <span onClick={handleClick} className="loginicon">
          Sign In
        </span>
      </div>

    
    </div>
  );
}

export default NavBar;
