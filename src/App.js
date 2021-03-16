import React, { useState } from "react";
import Media from "react-media";
import "./css/style.css";
import Header from "./components/header/Header";
import Navigation from "./components/navbar/Navbar";
import Hamburger from "./components/navbar/HamburgerMenu";
import Portfolio from "./components/portfolio/Portfolio";
import SectionAbout from "./components/about/SectionAbout";

const App = () => {
  const [trigger, setTrigger] = useState(false);

  const handleTrigger = () => (trigger ? setTrigger(false) : setTrigger(true));
  return (
    <>
      <Media query="(max-width: 899px)">
        <Hamburger handleTrigger={handleTrigger} trigger={trigger} />
      </Media>
      <Media query="(min-width: 900px)">
        <Navigation />
      </Media>

      <Header />
      <Portfolio />
      <SectionAbout />
    </>
  );
};
export default App;
