import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';


const defaultProps = {
    m: 1,
    style: { width: '100%', height: '29rem' },
    borderColor: 'text.primary',
    fontStyle: "italic",
    
  }; 
    
  const Home = () => {
      return (
        <Typography component="div">
            <Box component="span" textAlign="left"  fontSize={{ xs: 'h6.fontSize', sm: 'h4.fontSize', md: 'h3.fontSize' }}>
            <Typography variant="h4"  style={{marginLeft: '50px', marginTop: '300px', fontWeight: 'bold'}}>
                       I am a FULL STACK <br /> <span style={{marginLeft: "70px"}}>WEB-DEVELOPER</span>
            </Typography>
          </Box>
          <Box display="flex" justifyContent="center" border={0} {...defaultProps} >
          <Box component="span" m={1} textAlign="right" style={{bottom: '30px', position: 'absolute'}}  fontSize={{ xs: 'h6.fontSize', sm: 'h4.fontSize', md: 'h3.fontSize' }}>
                <Typography variant="h4" >
                       "One thing only i know, and that is that i know nothing" <br /> SOCRATES
               </Typography>
           </Box> 
          </Box>
         </Typography>
      )}
      export default Home;

        
        


  

            


     

