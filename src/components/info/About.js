import React from 'react'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

const defaultProps = {
    m: 1,
    style: { width: '100%', height: '53rem' },
    borderColor: 'text.primary',
    fontStyle: "italic",
}; 
    

const About = () => {
    return (
        <Typography component="div" >
          <Box display="flex"  border={0} {...defaultProps} >
          <Grid container spacing={1}   direction="row"
  justify="center"
  alignItems="center">
          <Grid item xs={12} sm={6}>
             <Box component="span"   fontSize={{ xs: 'h6.fontSize', sm: 'h4.fontSize', md: 'h3.fontSize' }}>
                 HEY
             </Box>
             </Grid>
           <Grid item xs={12} sm={6}>
             <Box component="span"   fontSize={{ xs: 'h6.fontSize', sm: 'h4.fontSize', md: 'h3.fontSize' }}>
                 HEY
             </Box>
             </Grid>

             </Grid>
          </Box>
       </Typography>

    )
}
         

   

export default About

   //<video autoPlay loop muted 
   //style={{
   //   position: 'absolute',
   //   width: '100%',
   //   left: '50%',
   //   right: '50%',
   //   height: '100%',
   //   objectFit: 'cover',
   //   transform: 'translate(-50%, -50%)',
   //   zIndex: '-1'
   //}}
   //   >
   //   <source src={video} type='video/mp4' />
   //</video>