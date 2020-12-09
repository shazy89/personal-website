import React from 'react'
import file from './Projects'
import Card from './ProjectCard'
import Grid from '@material-ui/core/Grid'
    
const Portfolio = () => {
  let portProjects = file.projects.map(proj => <Card key={proj.id} project={proj} />)
  return (
       <div > 
        <Grid 
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




   