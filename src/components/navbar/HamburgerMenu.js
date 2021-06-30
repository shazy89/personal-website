import React from "react";
import Pdf from "../../assets/Ed_Resume.pdf";
import AnchorLink from "react-anchor-link-smooth-scroll";
const HamburgerMenu = ({ handleTrigger, trigger, setTrigger }) => {
  const onResumeClick = () => {
    window.open(Pdf);
  };

  return (
    <div className="hamburger">
      <button onClick={handleTrigger} className="hamburger__button">
        {" "}
        <span className="hamburger__icon">&nbsp;</span>
      </button>
      {trigger ? (
        <div className={`hamburger__background `}>
          <nav className="hamburger__nav">
            <ul className={`hamburger__list `}>
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
              <li className="hamburger__item" onClick={() => setTrigger(false)}>
                <AnchorLink
                  className="hamburger__link"
                  href="#section_portfolio"
                >
                  {" "}
                  Portfolio
                </AnchorLink>
              </li>
              <li className="hamburger__item" onClick={() => setTrigger(false)}>
                <AnchorLink className="hamburger__link" href="#section-about">
                  {" "}
                  About
                </AnchorLink>
              </li>
            </ul>
          </nav>
        </div>
      ) : null}
    </div>
  );
};

export default HamburgerMenu;
