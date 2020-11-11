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
   <Typography component="div"  >
      <Box display="flex"  border={0} {...defaultProps} >
        <Grid container spacing={1}  >
          <Grid item xs={12} sm={6}>
           <Box component="span"  fontSize={{ xs: 'h6.fontSize', sm: 'h4.fontSize', md: 'h3.fontSize' }}>
              <Typography gutterBottom variant="h3" style={{marginLeft: '30px', marginTop: '40px'}} component="h2"> 
                  about me
              </Typography>
              <Typography gutterBottom variant="h4" style={{marginTop: '40px'}}  color="textSecondary" component="h2"> 
                 I am a FULL STACK WEB-DEVELOPER <br />
                    from New Jersey, USA        
              </Typography>
              <Typography gutterBottom variant="h5" style={{marginTop: '40px'}}  color="textSecondary" component="h2"> 
                 Hi! I’m Erdoan but I go by Ed. 
                 I’ve always been interested in software engineering and recently decided to change me career and dive into coding! 
                 It’s an exciting journey and I enjoy getting lost in writing or debugging code. 
                 I can truly say that I am passionate about writing code and will not give up until something is perfect.
              </Typography>
              <Typography gutterBottom variant="h5" style={{marginTop: '40px'}}  color="textSecondary" component="h2"> 
                When I’m not coding, you can find me either playing video games or gone skiing if it’s wintertime. 
                I love talking about motorcycles and the adrenaline it gives me when riding them!
              </Typography>
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