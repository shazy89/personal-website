import React from 'react';
import Typography from '@material-ui/core/Typography';

const Content = ({project}) => {
    return  ( 
        <div>
         <Typography gutterBottom variant="h5" component="h2">
               {project.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
               {project.info}
          </Typography> <br />
          <Typography variant="body2" color="textSecondary" component="p">
               {project.technologies}
          </Typography>
        </div>
      );
  };

  export default Content;