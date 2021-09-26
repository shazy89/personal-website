import React, { useMemo } from 'react';
import Card from '../card/Card';
import video from '../../assets/images/portfolio/coding.mp4';
import { projects } from './Projects';
import SlickSlider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const sliderSettings = {
  dots: true,
  infinite: true,
  accessibility: true,
  arrows: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 2,
  initialSlide: 0,

  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
  ],
};
const padIng = {
  pading: '1rem',
};

const Portfolio = () => {
  const displayProjects = useMemo(
    () =>
      projects.map((project) => <Card key={project.id} project={project} />),
    []
  );
  return (
    <>
      <section
        id="section_portfolio"
        className="section-portfolio u-margin-top-huge"
      >
        <div className="bg-video">
          <video className="bg-video__content" autoPlay muted loop>
            <source src={video} type="video/mp4" />
            Your browser is not supported!
          </video>
        </div>
        <div style={padIng}>
          <SlickSlider {...sliderSettings}>{displayProjects}</SlickSlider>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
