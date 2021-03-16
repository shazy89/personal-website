import React from "react";
import Pdf from "../../assets/Ed_Resume.pdf";

const HamburgerMenu = ({ handleTrigger, trigger }) => {
  const onResumeClick = () => {
    window.open(Pdf);
  };
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
                <a
                  href="#section_portfolio"
                  href={require("../../assets/Ed_Resume.pdf")}
                  onClick={onResumeClick}
                  className="hamburger__link"
                >
                  Resume
                </a>
              </li>
              <li className="hamburger__item">
                <a href="#section_portfolio" className="hamburger__link">
                  Portfolio
                </a>
              </li>
              <li className="hamburger__item">
                <a href="#section-about" className="hamburger__link">
                  About Me
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