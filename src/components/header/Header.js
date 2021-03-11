import React from "react";
import Logo from "./Logo";

const Header = () => {
  return (
    <>
      <Logo />
      <header className="header">
        <div className="header__socialmedia-icons"></div>
      </header>
    </>
  );
};

export default Header;
