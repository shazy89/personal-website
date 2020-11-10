import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub';
import Grid from '@material-ui/core/Grid';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';

const Footer = () => {
   return (
       <div style={{marginTop: '70px'}}>
        <Grid   
              container
              direction="row"
              justify="center"
              alignItems="baseline"
            >  
           <GitHubIcon />  
           <LinkedInIcon /> 
           <EmailIcon />
        </Grid>
       </div>
   )
   }
export default Footer;