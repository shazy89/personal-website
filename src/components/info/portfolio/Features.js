import React from 'react';
import Button from '@material-ui/core/Button';

const Features = ({project}) => {
    return  ( 
        <div>
          <Button size="small" color="primary">
            <a href={project.github} target="_blank" rel="noreferrer"> Github: Web App </a>
          </Button>
          {project.mobGithub? ( <Button size="small" color="primary">
            <a href={project.github} target="_blank" rel="noreferrer"> Github: Mobile App </a>
          </Button>) : null }
          <Button size="small" color="primary">
             <a href={project.demo} target="_blank" rel="noreferrer"> Demo </a>
          </Button>
          {project.demoMob ? (          <Button size="small" color="primary">
             <a href={project.demo} target="_blank" rel="noreferrer"> Demo Mobile App</a>
          </Button>) : null }
        </div>
      );
  };

  export default Features