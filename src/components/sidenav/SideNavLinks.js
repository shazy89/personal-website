import React from 'react';
import { Link } from 'react-router-dom'; 
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid'
  const SideNavLinks = ({tapography3}) => {
  

     return ( 
      <div> 
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
            <Link to={'/home'} className={tapography3}>Home</Link>
            <Link to={'/resume'} className={tapography3}>Resume</Link>
            <Link to={'/portfolio'} className={tapography3}>Portfolio</Link>
            <Link to={'/hbout'} className={tapography3}>About</Link>
         </Grid>
    </div>
   )
  };
       
        
       
       
       
        


   
  

export default SideNavLinks;