import React from 'react';
import Particles from 'react-particles-js';
import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles({
    particlesCanva: {
      position: "absolute",
      left: '0',
      top: '0',
      width: '100%',
      height: '100%',
      zIndex: '-1'
    },
    mainContainer: { 
        background: 'tan'
    }
  })

function Home() { 
  const classes = useStyles();

    return ( 

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
          }}} />
    
    )
}

export default Home;