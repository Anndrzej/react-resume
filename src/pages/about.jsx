import { Box, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';

const useStyle = makeStyles(theme => ({
  title: {
    color: 'white',
    textTransform: 'uppercase'
  },
  wrapper: {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    position: 'absolute',
    textAlign: 'center'
  }
}));

function About() {

  const classes = useStyle();

  return (
    <div>
      <Grid container justify='center'>
        <Box component='div' className={classes.wrapper}>
          <Typography className={classes.title}>
            About me
            </Typography>
        </Box>
      </Grid>

    </div>
  )
}

export default About
