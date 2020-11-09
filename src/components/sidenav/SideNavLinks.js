import React from 'react';
import { Link } from 'react-router-dom'; 
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const SideNavLinks = () => (
    <div>
       <Link to={'/'}><Button color="primary">
          Home
       </Button></Link>

    </div>
)

export default SideNavLinks;