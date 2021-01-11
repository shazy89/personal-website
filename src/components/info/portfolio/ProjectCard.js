import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden';
import Paper from '@material-ui/core/Paper';
import CardFeatures from './CardFeatures';
import Content from './Content'


const ProjectCard = ({project}) => {
    const classes = useStyles();

    const projectBox = project.imgs.map((img, ind)=> {
      return ( 
      <Paper square key={ind} elevation={3} >
        <img alt='' src={`${img}`} style={{width: '100%', height: '100%'}}/>
      </Paper>  
      );
 });

 return (
   <Grid container className={classes.root} item xs={12} sm={8} md={6} spacing={0}>   
    <Card className={classes.root}>
      <CardActionArea>
      <Hidden only={['xs','sm','md']}>
         <div className={classes.media}>
           {projectBox}
         </div>
         </Hidden>
        <CardContent>
          <Content  project={project}/>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <CardFeatures project={project} />
      </CardActions>
    </Card>
 </Grid>
 ) 
 };

  

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

   export default ProjectCard;
          


      

        

      
     

