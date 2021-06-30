import React from "react";
import Pdf from "../../assets/Ed_Resume.pdf";
import AnchorLink from "react-anchor-link-smooth-scroll";
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
            <AnchorLink className="navigation__link" href="#section_portfolio">
              {" "}
              Portfolio
            </AnchorLink>
          </li>
          <li className="navigation__item">
            <AnchorLink className="navigation__link" href="#section-about">
              {" "}
              About
            </AnchorLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
