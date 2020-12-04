import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const NotFound = () => {
    return (
        <div>
      <CssBaseline />
      <Container  maxWidth=" xs ,sm , md, lg, xs">
        <Typography component="div" style={{ backgroundImage: 'url(https://res.cloudinary.com/dytheecsk/image/upload/v1607098287/portfolio/404_v2_yb62oq.png)', height: '100vh' }} />
      </Container>
        </div>
    )
}

export default NotFound