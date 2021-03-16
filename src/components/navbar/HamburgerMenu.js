import React from "react";

const HamburgerMenu = ({ handleTrigger, trigger }) => {
  return (
    <div className="hamburger">
      <button onClick={handleTrigger} className="hamburger__button">
        {" "}
        <span className="hamburger__icon">&nbsp;</span>
      </button>
      {trigger && (
        <div className="hamburger__background">
          <nav className="hamburger__nav">
            <ul className="hamburger__list">
              <li className="hamburger__item">
                <a href="#section_portfolio" className="hamburger__link">
                  Portfolio
                </a>
              </li>
              <li className="hamburger__item">
                <a href="#section_portfolio" className="hamburger__link">
                  Portfolio
                </a>
              </li>
              <li className="hamburger__item">
                <a href="#section_portfolio" className="hamburger__link">
                  Portfolio
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
