import React, { useState } from 'react';
import Media from 'react-media';
import './css/style.css';
import Header from './components/header/Header';
import Navigation from './components/navbar/Navbar';
import Hamburger from './components/navbar/HamburgerMenu';
import Portfolio from './components/portfolio/Portfolio';
import SectionAbout from './components/about/SectionAbout';

const App = () => {
  const [trigger, setTrigger] = useState(false);

  const handleTrigger = () => (trigger ? setTrigger(false) : setTrigger(true));
  return (
    <>
      <Media
        queries={{
          small: '(max-width: 899px)',
          large: '(min-width: 900px)',
        }}
      >
        {(matches) => (
          <>
            {matches.small ? (
              <Hamburger
                handleTrigger={handleTrigger}
                trigger={trigger}
                setTrigger={setTrigger}
              />
            ) : null}
            {matches.large ? <Navigation /> : null}
          </>
        )}
      </Media>
      <Header />

      <Portfolio />
      <SectionAbout />
    </>
  );
};
export default App;
