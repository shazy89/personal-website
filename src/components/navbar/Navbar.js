import React from "react";

const Navbar = () => {
  return (
    <nav className="navigation">
      <div className="row navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item">
            <a href="#" className="navigation__link">
              About
            </a>
          </li>
          <li className="navigation__item">
            <a href="#" className="navigation__link">
              Portfolio
            </a>
          </li>
          <li className="navigation__item">
            <a href="#" className="navigation__link">
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
