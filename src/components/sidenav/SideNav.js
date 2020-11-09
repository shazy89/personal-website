import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';

import grey from "@material-ui/core/colors/grey";
import { fontFamily } from '@material-ui/system';
import Img from '../../assets/IMG_7527.png' 
import SideNavLinks from './SideNavLinks'

const drawerWidth = 450;

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },

  drawerPaper: {
    width: drawerWidth,
    backgroundColor: grey[100]
  },
  // necessary for content to be below app bar

  tapography: {
      fontFamily: ' Trebuchet MS,, sans-serif',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: '30px'
   },
  tapography2: {
      fontFamily: ' Trebuchet MS,, sans-serif',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: '10px'
   },
  tapography3: {
      fontFamily: ' Trebuchet MS,, sans-serif',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: '20px',
      textDecoration: 'none',
      fontSize: '20px',
      color: 'black'
    },
   

   image: {
     width: '35%',  
     borderRadius: '50%',
     marginLeft: 'auto',
     marginRight: 'auto',
     marginTop: '50px',
     borderColor: 'red'
 },
 }));
      
 const SideNav = () => {
     const classes = useStyles();
 return (
     <div className={classes.root}>
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
           <Typography variant="h5" className={classes.tapography2}>Full Stack Web Developer</Typography>
           <List>
              <SideNavLinks tapography3={classes.tapography3}/>
          </List>
       </Drawer>
     </div>
 )
 }
   
           
 
 export default SideNav;

  
          




