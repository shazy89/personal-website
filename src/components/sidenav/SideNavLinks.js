import React from 'react';
import { Link } from 'react-router-dom'; 
import ListItem from '@material-ui/core/ListItem';
    
  const SideNavLinks = ({tapography2}) => {
  

     return ( 
      <div> 
        <ListItem button  > 
           <Link to={'/Home'} className={tapography2}>Home</Link>
       </ListItem>
        <ListItem button  > 
           <Link to={'/Resume'} className={tapography2}>Resume</Link>
       </ListItem>
       <ListItem button  > 
          <Link to={'/Portfolio'} className={tapography2}>Portfolio</Link>
       </ListItem>
        <ListItem button  > 
            <Link to={'/About'} className={tapography2}>About</Link>
       </ListItem>
    </div>
   )
  };


   
  

export default SideNavLinks;