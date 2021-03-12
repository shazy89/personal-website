import React from "react";
import video from "../../assets/images/portfolio/coding.mp4";
import video1 from "../../assets/images/portfolio/Coding_technology.mp4";
const Portfolio = () => {
  return (
    <section className="section-portfolio">
      <div class="bg-video">
        <video class="bg-video__content" autoPlay muted loop>
          <source src={video1} type="video/mp4" />
          Your browser is not supported!
        </video>
      </div>
    </section>
  );
};

export default Portfolio;
