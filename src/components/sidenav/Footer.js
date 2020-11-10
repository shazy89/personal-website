import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub';
import Grid from '@material-ui/core/Grid';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

const Footer = () => {
   return (
       <div style={{marginTop: '150px'}}>
        <Grid container
              direction="row"
              justify="center"
              alignItems="baseline" >  
           <a style={{marginRight:'20px', color:'black'}} href="mailto:erdo.shazy123@gmail.com"><EmailIcon /></a>
           <a style={{color:'black'}}  target="_blank" href="https://github.com/shazy89"><GitHubIcon /></a>
           <a target="_blank" style={{marginLeft:'20px', color:'black' }} href="https://www.linkedin.com/in/erdoan-ed-shaziman-0533611b9/"><LinkedInIcon /></a>
           <a target="_blank" style={{marginLeft:'20px', color:'black' }} href="https://www.facebook.com/shazys"><FacebookIcon /></a>
           <a target="_blank" style={{marginLeft:'20px', color:'black' }} href="https://www.instagram.com/shazyoh/"><InstagramIcon /></a>
        </Grid>
       </div>
   )
}
export default Footer;
               
            