import React from "react";
import Logo from "./Logo";
import Icons from "./Icons";
import HeaderText from "./HeaderText";

const Header = () => {
  return (
    <>
      <Logo />
      <header className="header">
        <HeaderText />
      </header>
      <Icons />
    </>
  );
};

export default Header;
