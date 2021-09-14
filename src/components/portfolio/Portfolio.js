import React from 'react';
import Card from '../card/Card';
import video from '../../assets/images/portfolio/coding.mp4';
//import video1 from "../../assets/images/portfolio/Coding_technology.mp4";
import { projects } from './Projects';
//import AnimatedCard from '../card/AnimatedCard';
const Portfolio = () => {
  const firsRow = projects
    .slice(0, 2)
    .map((project) => <Card key={project.id} project={project} />);
  const secondRow = projects
    .slice(2, 4)
    .map((project) => <Card key={project.id} project={project} />);
  const thirdRow = projects
    .slice(4)
    .map((project) => <Card key={project.id} project={project} />);

  const displayProjects = projects.map((project) => (
    <Card key={project.id} project={project} />
  ));
  return (
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

      {
        /*    <div className="row">{firsRow}</div>
      <div className="row">{secondRow}</div>
      <div className="row">{thirdRow}</div> */
        <div className="card_container">{displayProjects}</div>
      }
    </section>
  );
};

export default Portfolio;
