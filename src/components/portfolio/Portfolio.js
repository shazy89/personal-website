import React from "react";
import Card from "../card/Card";
import video from "../../assets/images/portfolio/coding.mp4";
import video1 from "../../assets/images/portfolio/Coding_technology.mp4";
const Portfolio = () => {
  return (
    <section className="section-portfolio u-margin-top-huge">
      <div className="bg-video">
        <video className="bg-video__content" autoPlay muted loop>
          <source src={video} type="video/mp4" />
          Your browser is not supported!
        </video>
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <Card />
        </div>
        <div className="col-1-of-2">
          <Card />
        </div>
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <Card />
        </div>
        <div className="col-1-of-2">
          <Card />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
