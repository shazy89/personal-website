import React from 'react';
import CardHeading from './CardHeading';
import CardContent from './CardContent';
import CardFooter from './CardFooter';

const Card = ({ project }) => {
  return (
    <>
      <div className="card">
        <CardHeading images={project.imgs} name={project.name} />
        <CardContent
          info={project.info}
          technologiesForIcons={project.technologiesForIcons}
        />
        <CardFooter project={project} />
      </div>

      {/*trigger && <Modal demo={project.demo} name={project.name} /> */}
    </>
  );
};

export default Card;
