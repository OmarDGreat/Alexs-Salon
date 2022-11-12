import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav() {
  const handleClick = () => {
    console.log("click handled");
  };

  return (
    <header data-testid="header" className="flex-row px-1">
      <h2>
        <a href="/">
          <span role="img" aria-label="ALex-Salon"></span> Alex's Salon
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a href="#about" onClick={() => handleClick()}>
              About me
            </a>
          </li>

          <li className="mx-2">
            <a href="#stylists" onClick={() => handleClick()}>
              Stylist
            </a>
          </li>

          <li className="mx-2">
            <a href="#appointments" onClick={() => handleClick()}>
              Appointments
            </a>
          </li>

          <li className="mx-2">
            <a href="#contact-info" onClick={() => handleClick()}>
              Contact Info
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
