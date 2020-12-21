import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import Notfound from '../NotFound';
import List from '@material-ui/core/List';
import Home from '../info/Home'
import Resume from '../info/Resume'
import About from '../info/About'
import Portfolio from '../info/portfolio/Portfolio'
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SideNavLinks from './SideNavLinks'
import Footer from './Footer'
import Img from '../../assets/images/IMG_7527.jpg' 
import backgroundImg from '../../assets/images/img7.png'

const drawerWidth = 350;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 1,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    backgroundImage: `url(${backgroundImg})`,
    padding: theme.spacing(3),
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
    borderColor: 'red',
    display: 'flex'

}
}));

function SN(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  

  const drawer = (
    <div>
      <div className={classes.toolbar} />
   
       <List>
        <img src={Img} className={classes.image} alt="Ed Shaziman" />
         <Typography paragraph variant="h4" className={classes.tapography}> 
           Erdoan (Ed) Shaziman 
         </Typography>  
    
             <SideNavLinks tapography3={classes.tapography3}/>
         </List>
        <Footer />
    </div>
  );

      
      

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar style={{backgroundColor: 'grey'}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, 
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          > 
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch>
           <Route  exact path="/" component={Home} />
           <Route  path="/resume" component={ Resume }/> 
           <Route  path="/about" component={ About }/> 
           <Route  path="/portfolio" component={ Portfolio }/> 
           <Route component={Notfound} />
        </Switch>
      </main>
    </div>
  );
}

SN.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default SN;