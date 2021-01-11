import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

export default (project) => {

    const projectBox = project.imgs.map((img, ind)=> {
        return ( 
        <Paper square key={ind} elevation={3} >
          <img alt='' src={`${img}`} style={{width: '100%', height: '100%'}}/>
        </Paper>  
        );
   });

const features = () => {
  return  ( 
      <div>
        <Button size="small" color="primary">
          <a href={project.github} target="_blank" rel="noreferrer"> Github: Web App</a>
        </Button>
        {project.mobGithub? ( <Button size="small" color="primary">
          <a href={project.github} target="_blank" rel="noreferrer"> Github: Mobile App</a>
        </Button>) : null      }
        <Button size="small" color="primary">
           <a href={project.demo} target="_blank" rel="noreferrer"> Demo</a>
        </Button>
      </div>
    );
};
           



return [projectBox, features];
    
}