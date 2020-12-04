import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import grey from "@material-ui/core/colors/grey";
import Img from '../../assets/images/IMG_7527.png' 
import SideNavLinks from './SideNavLinks'
import Home from '../info/Home'
import Resume from '../info/Resume'
import About from '../info/About'
import Portfolio from '../info/portfolio/Portfolio'
import Footer from './Footer'
import backgroundImg from '../../assets/images/img7.png'
import Grid from '@material-ui/core/Grid';

const drawerWidth = 400;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
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

  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },

  drawerPaper: {
    width: drawerWidth,
    backgroundColor: grey[300]
  },
   // necessary for content to be below app bar
   toolbar: theme.mixins.toolbar,
   content: {
     flexGrow: 1,
     backgroundImage: `url(${backgroundImg})`,
     padding: theme.spacing(0),
   },

   tapography: {
       fontStyle: "italic",
       marginLeft: 'auto',
       marginRight: 'auto',
       marginTop: '30px'
    },
   tapography2: {
       fontStyle: "italic",
       marginLeft: 'auto',
       marginRight: 'auto',
       marginTop: '10px'
    },
   tapography3: {
       fontStyle: "italic",
       marginLeft: 'auto',
       marginRight: 'auto',
       marginTop: '20px',
       textDecoration: 'none',
       fontSize: '20px',
       color: 'black',
       cursor: 'pointer'
     },
     image: {
       width: '35%',  
       borderRadius: '50%',
       marginLeft: 'auto',
       marginRight: 'auto',
       marginTop: '50px',
       borderColor: 'red'
   }
   }));
   
   const SideNav = () => {
       const classes = useStyles();
   return (
       <div className={classes.root} >
        
         <CssBaseline />

              <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                 paper: classes.drawerPaper,
                }}
                anchor="left"
         >
              <img src={Img} className={classes.image} alt="Ed Shaziman" />
                <Typography paragraph variant="h4" className={classes.tapography}> 
                  Erdoan (Ed) Shaziman 
                </Typography>  
               <List>
                 <SideNavLinks tapography3={classes.tapography3}/>
               </List>
            <Footer />
          </Drawer>
         <main className={classes.content} >
            <div  className={classes.toolbar}/>
              <Switch>
                 <Route  exact path="/" component={Home} />
                 <Route  path="/resume" component={ Resume }/> 
                 <Route  path="/about" component={ About }/> 
                 <Route  path="/portfolio" component={ Portfolio }/> 
              </Switch>
         </main>
       
       </div>
   )};
   export default SideNav;  

             
           


   

     

      
 

       

        
             
           
 




  
          




