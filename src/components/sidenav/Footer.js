import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub';
import Grid from '@material-ui/core/Grid';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';

const Footer = () => {
   return (
       <div style={{marginTop: '150px'}}>
        <Grid container
              direction="row"
              justify="center"
              alignItems="baseline" >  
           <a style={{marginRight:'20px', color:'grey'}} href="mailto:erdo.shazy123@gmail.com"><EmailIcon /></a>
           <a style={{color:'grey'}} href="https://github.com/shazy89"><GitHubIcon /></a>
           <a style={{marginLeft:'20px', color:'grey' }} href="https://www.linkedin.com/in/erdoan-ed-shaziman-0533611b9/"><LinkedInIcon /></a>
        </Grid>
       </div>
   )
}
export default Footer;
               
            