import React from 'react';
import { Link } from 'react-router-dom'; 
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const SideNavLinks = () => (
   <ListItem button  > 
     <Link to={'/Home'}>Home</Link>
     <ListItemText  />
     <Link to={'/Resume'}>Resume</Link>
     <ListItemText  />
     <Link to={'/Portfolio'}>Portfolio</Link>
     <ListItemText  />
     <Link to={'/About'}>About</Link>
     <ListItemText  />
  </ListItem>
  
)

export default SideNavLinks;

//   </Link> 