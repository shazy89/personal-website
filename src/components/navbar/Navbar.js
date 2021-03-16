import React from "react";
import Pdf from "../../assets/Ed_Resume.pdf";

const Navbar = () => {
  const onResumeClick = () => {
    window.open(Pdf);
  };
  return (
    <nav className="navigation">
      <div className="row navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item">
            <a
              href={require("../../assets/Ed_Resume.pdf")}
              onClick={onResumeClick}
              target="_blank"
              className="navigation__link"
            >
              Resume
            </a>
          </li>
          <li className="navigation__item">
            <a href="#section_portfolio" className="navigation__link">
              Portfolio
            </a>
          </li>
          <li className="navigation__item">
            <a href="#section-about" className="navigation__link">
              About
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
