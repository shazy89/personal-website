import React from "react";

const SectionAbout = () => {
  return (
    <div id="section-about" className="section-about">
      <div className="about-me__container">
        <div className="about-me__img"></div>

        <div className="about-me__content u-margin-top-huge ">
          <h3 className="about-me__header">About Me</h3>
          <p className="about-me__paragraph u-margin-top-small">
            {" "}
            Hi! I’m Erdoan but I go by Ed.  I’ve always been interested in
            software engineering and recently decided to change my career and
            dive into coding! It’s an exciting journey and I enjoy getting lost
            in writing or debugging code. I can truly say that I am passionate
            about writing code and will not give up until something is perfect.
          </p>
          <p className="about-me__paragraph u-margin-top">
            {" "}
            When I’m not coding, you can find me either playing video games or
            gone skiing if it’s wintertime. I love talking about motorcycles and
            the adrenaline it gives me when riding them!
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionAbout;
