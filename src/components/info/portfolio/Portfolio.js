import React from 'react'
import file from './Projects'
import Card from './ProjectCard'
import Grid from '@material-ui/core/Grid'

const defaultProps = {
    m: 1,
    style: { width: '100%', height: '53rem' },
    borderColor: 'text.primary',
    fontStyle: "italic",
  }; 
    
const Portfolio = () => {
  let portProjects = file.projects.map(proj => <Card key={proj.id} project={proj} />)
  return (
       <div > 
        <Grid  xs={12} sm={12} md={12} lg={12} xl={12}
           container
           direction="column"
           justify="flex-start"
           alignItems="stretch"
          
            >
           {portProjects}
        
        </Grid>
       </div>
        )
    }
    export default Portfolio




   