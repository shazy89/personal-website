import React from 'react';
import Logo from './Logo';
import Icons from './Icons';
import HeaderText from './HeaderText';

const Header = () => {
  return (
    <div>
      <Logo />
      <header className="header">
        <HeaderText />
      </header>
      <Icons />
    </div>
  );
};

export default Header;
