import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const defaultProps = {
    m: 1,
    style: { width: '100%', height: '53rem' },
    borderColor: 'text.primary',
    fontStyle: "italic",
    
  }; 
  const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 800,
      flexWrap: 'wrap',
      margin: '5px',
      breakpoints: {
        values: {
          xs: 0,
          sm: 400,
          md: 960,
          lg: 1280,
          xl: 1920,
        },
      },
    },
    media: {
      height: 200,
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(31),
        height: theme.spacing(20),
    },
   }
  }));   
  const Home = () => {
    const classes = useStyles();
      return (
          <Typography component="div" >
              <Box display="flex" justifyContent="center"  border={0} {...defaultProps} >
               <Grid container spacing={1}  >
                <Grid item xs={12} sm={6}>
                 <Box component="span"   fontSize={{ xs: 'h6.fontSize', sm: 'h4.fontSize', md: 'h3.fontSize' }}>
                  <Typography variant="h4"  style={{ fontWeight: 'bold'}}>
                      I am a FULL STACK <br /> <span style={{marginLeft: "70px"}}>WEB-DEVELOPER</span>
                  </Typography>
                 </Box>
                <Box component="span" m={1}  style={{ bottom: '30px', position: 'absolute'}}  
                   fontSize={{ xs: 'h6.fontSize', sm: 'h4.fontSize', md: 'h3.fontSize' }} >
                  <Typography variant="h4" align='right' >
                    "One thing only I know, and that is that I know nothing" <br /> SOCRATES
                 </Typography>
              </Box> 
             </Grid>
            </Grid>
           </Box>
    </Typography>
  )};
export default Home;



       

        
        


  

            


     

