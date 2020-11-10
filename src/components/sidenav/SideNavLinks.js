import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

const SideNavLinks = ({tapography3}) => {
const [HomeUnderLine, setHomeUnderLine] = useState(true)
const [ResumeUnderLine, setResumeUnderLine] = useState(false)
const [PortfolioUnderLine, setPortfolioUnderLine] = useState(false)
const [AboutUnderLine, setAboutUnderLine] = useState(false)

const linkSelect = (e) => {
  
    switch(e.target.text) {
        case('Home'): {
            setHomeUnderLine(true)
            setResumeUnderLine(false)
            setPortfolioUnderLine(false)
            setAboutUnderLine(false)
            break;
     } case ('Resume'): {
           setHomeUnderLine(false)
           setResumeUnderLine(true)
           setPortfolioUnderLine(false)
           setAboutUnderLine(false)
           break;
     } case ('Portfolio'): {
           setHomeUnderLine(false)
           setResumeUnderLine(false)
           setPortfolioUnderLine(true)
           setAboutUnderLine(false)
           break;
     } case ('About'): {
           setAboutUnderLine(true)
           setHomeUnderLine(false)
           setResumeUnderLine(false)
           setPortfolioUnderLine(false)
           break;
     }
    }
}
     
return ( 
 <div> 
   <Grid
     container
     direction="column"
     justify="center"
     alignItems="center"
   >
      <Button > <Link to={'/'} className={tapography3} 
         style={{textDecoration: HomeUnderLine? 'underline' : null}} onClick={e => linkSelect(e)}>Home</Link></Button>
      <Button> <Link to={'/resume'} className={tapography3} 
         style={{textDecoration: ResumeUnderLine? 'underline' : null}} onClick={e => linkSelect(e)}>Resume</Link> </Button>
      <Button> <Link to={'/portfolio'} className={tapography3} 
         style={{textDecoration: PortfolioUnderLine? 'underline' : null}} onClick={e => linkSelect(e)} >Portfolio</Link> </Button>
      <Button><Link to={'/about'} className={tapography3} 
         style={{textDecoration: AboutUnderLine? 'underline' : null}} onClick={e => linkSelect(e)} >About</Link> </Button>
    </Grid>
</div>
)
};

        
       
        
       
       
       
        


   
  

export default SideNavLinks;