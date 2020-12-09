import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 800,
      flexWrap: 'wrap',
      margin: '5px',
      breakpoints: {
        values: {
          xs: 0,
          sm: 400,
          md: 960,
          lg: 1280,
          xl: 1920,
        },
      },
    },
    media: {
      height: 200,
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(30),
        height: theme.spacing(20),     
         breakpoints: {
          values: {
            xs: 0,
            sm: 400,
            md: 960,
            lg: 1280,
            xl: 1920,
          },
        },
    },
   }
  }));

const ProjectCard = ({project}) => {
    const classes = useStyles();

return (
  
   <Grid container className={classes.root} item xs={12} sm={8} md={6} spacing={0}>   

    <Card className={classes.root}>
   
      <CardActionArea>
      <Hidden only={['xs','sm','md']}>

         <div className={classes.media}>
           {project.imgs.map((img, ind)=> <Paper key={ind} elevation={3} style={{backgroundImage:`url(${img})`, backgroundSize: 'cover'}}/>)}
         </div>
         </Hidden>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
               {project.name}
          </Typography>
          
          <Typography variant="body2" color="textSecondary" component="p">
               {project.info}
          </Typography> <br />
          <Typography variant="body2" color="textSecondary" component="p">
               {project.technologies}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
         <a href={project.github} target="_blank" rel="noreferrer"> Github</a>
        </Button>
        <Button size="small" color="primary">
        <a href={project.demo} target="_blank" rel="noreferrer"> Demo</a>
        </Button>
        { project.webApp ?
        <Button size="small" color="primary">
        <a href={project.webApp} target="_blank" rel="noreferrer"> live app</a>
        </Button> : null}
      </CardActions>
    </Card>
   
    </Grid>

   )
   };

   export default ProjectCard
  

      

        

      
     

