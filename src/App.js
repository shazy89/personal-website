import React from "react";
import "./css/style.css";
import Header from "./components/header/Header";
import Navigation from "./components/navbar/Navbar";
import Portfolio from "./components/portfolio/Portfolio";
//import { BrowserRouter as Router } from "react-router-dom";
//import SN from "./components/sidenav/SN";
import Modal from "./components/modals/VideoModal";
const App = () => {
  return (
    <>
      <Navigation />
      <Header />
      <Portfolio />
      <Modal />
    </>
  );
};
export default App;
