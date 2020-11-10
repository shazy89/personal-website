import React from 'react';
import SideNav from '../sidenav/SideNav'
import wallPhoto from '../../assets/wallphoto.jpg'
import Box from '@material-ui/core/Box';

const defaultProps = {
    m: 1,
    style: { width: '60rem', height: '51rem'   },
    borderColor: 'text.primary',
    
  }; 
  
const Home = () => {

return (
    <div >
    <Box display="flex" justifyContent="center" >
      <Box border={0} {...defaultProps} > 
         <h1>Hey You</h1>
      </Box> 
    </Box>
    </div>
)}
export default Home;


     

