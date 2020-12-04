import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import img from '../assets/images/404.png'

const NotFound = () => {
    return (
        <div>
      <CssBaseline />
      <Container  maxWidth=" xs ,sm , md, lg, xs">
        <Typography component="div" style={{ backgroundImage: `url(${img})`, height: '100vh' }} />
      </Container>
        </div>
    )
}

export default NotFound