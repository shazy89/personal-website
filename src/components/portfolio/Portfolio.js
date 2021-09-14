import React, { useMemo } from 'react';
import Card from '../card/Card';
import video from '../../assets/images/portfolio/coding.mp4';
import { projects } from './Projects';

const Portfolio = () => {
  const displayProjects = useMemo(
    () =>
      projects.map((project) => <Card key={project.id} project={project} />),
    []
  );
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

      <div className="card_container">{displayProjects}</div>
    </section>
  );
};

export default Portfolio;
