import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';


const defaultProps = {
    m: 1,
    style: { width: '100%', height: '52rem'   },
    borderColor: 'text.primary',
    fontStyle: "italic",
    textAlign: "right"
  }; 
  const imgProps = {
    bgcolor: 'background.paper',
    borderColor: 'text.primary',
    m: 1,
    border: 1,
    style: { width: '5rem', height: '5rem' },
  };
  
const Home = () => {

return (
    <div >
    <Box display="flex" justifyContent="center" >
      <Box border={0}   {...defaultProps} > 
          <Typography variant="h4"  
             style={{position: 'absolute', bottom: '50px', right: '80px'}}>
                 "One thing only i know, and that is that i know nothing"
         </Typography>
          <Typography variant="h4" textAlign="right" 
            style={{position: 'absolute', bottom: '10px', right: '80px'}}>
                  SOCRATES
         </Typography>
      </Box> 
    </Box>
    </div>
)}
export default Home;


     

