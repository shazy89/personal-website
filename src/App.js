import React from "react";
import "./css/style.css";
import Header from "./components/header/Header";
import Navigation from "./components/navbar/Navbar";
import Portfolio from "./components/portfolio/Portfolio";
//import { BrowserRouter as Router } from "react-router-dom";
//import SN from "./components/sidenav/SN";

const App = () => {
  return (
    <>
      <Navigation />
      <Header />
      <Portfolio />
    </>
  );
};
export default App;
