import React from "react";

const HamburgerMenu = () => {
  return (
    <div className="hamburger">
      <button className="hamburger__button">
        {" "}
        <span class="hamburger__icon">&nbsp;</span>
      </button>
      <div className="hamburger__background">
        <nav className="hamburger__nav">
          <ul className="hamburger__list">
            <li className="hamburger__item">
              <a href="#section_portfolio" className="navigation__link">
                Portfolio
              </a>
            </li>
            <li className="hamburger__item">
              <a href="#section_portfolio" className="navigation__link">
                Portfolio
              </a>
            </li>
            <li className="hamburger__item">
              <a href="#section_portfolio" className="navigation__link">
                Portfolio
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default HamburgerMenu;
