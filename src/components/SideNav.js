import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';

import ListItemText from '@material-ui/core/ListItemText';

import Avatar from '@material-ui/core/Avatar';
import grey from "@material-ui/core/colors/grey";
import { fontFamily } from '@material-ui/system';
import Img from '../assets/IMG_7527.png' 

const drawerWidth = 500;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    backgroundColor: grey[300],
    color: 'black',

  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  tapography: {
      fontFamily: ' cursive, sans-serif',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: '30px'
      
  },
  cardMedia: {
    width: '40%',  
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
           <img src={Img} className={classes.cardMedia} alt="Ed Shaziman" />
  
        <Typography paragraph variant="h4" className={classes.tapography}> 
             Erdoan (Ed) Shaziman 
          </Typography>  
      </Drawer>
      <main className={classes.content}>
      <div className={classes.toolbar} />
  
      </main>
    </div>
)
}

export default SideNav;

