import React from 'react';
import Particles from 'react-particles-js';
import { makeStyles } from '@material-ui/styles';
import Footer from '../component/footer'
import { Box } from '@material-ui/core';

const useStyles = makeStyles({
  particlesCanva: {
    position: "absolute",
    left: '0',
    top: '0',
    width: '100%',
    height: '100%',
    zIndex: '-1'
  },
})

function Home() {
  const classes = useStyles();

  return (
    <Box component='main'>
      <Footer />
      <Particles className={classes.particlesCanva}
        params={{
          "particles": {
            "number": {
              "value": 90
            },
            "size": {
              "value": 1
            }
          },
          "interactivity": {
            "events": {
              "onhover": {
                "enable": true,
                "mode": "repulse"
              }
            }
          }
        }} />
    </Box>
  )
}

export default Home;