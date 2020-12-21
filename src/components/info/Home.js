import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


const defaultProps = {
    m: 1,
    style: { width: '100%', height: '50rem' },
    borderColor: 'text.primary',
    fontStyle: "italic",
    
  }; 

  const Home = () => {

      return (
          <Typography component="div" >
              <Box display="flex" justifyContent="center"  border={0} {...defaultProps} >
               <Grid container spacing={1}  >
                <Grid item xs={12} sm={6}>
                 <Box component="span"   
                 fontSize={{ xs: 'h6.fontSize', sm: 'h4.fontSize', md: 'h3.fontSize' }}   >
                  <Typography variant="h4"  style={{ fontWeight: 'bold', marginTop: '230px'}}>
                      I am a FULL STACK <br /> <span style={{marginLeft: "70px"}}>WEB-DEVELOPER</span>
                  </Typography>
                 </Box>
                 <Box component="span" m={1}  style={{ bottom: '30px', position: 'absolute'}}  
                   fontSize={{ xs: 'h6.fontSize', sm: 'h4.fontSize', md: 'h3.fontSize' }} >
                  <Typography variant="h4"  align='right' >
                    "One thing only I know, and that is that I know nothing" <br /> SOCRATES
                 </Typography>
              </Box> 
             </Grid>
            </Grid>
           </Box>
    </Typography>
  )};
export default Home;
               



       

        
        


  

            


     

