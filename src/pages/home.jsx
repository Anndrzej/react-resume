import React from 'react';
import Particles from 'react-particles-js';
import { makeStyles } from '@material-ui/styles';
import { Box, Button } from '@material-ui/core';
import { LinkedIn, Facebook } from '@material-ui/icons';
import GitHubIcon from '@material-ui/icons/GitHub';


const useStyles = makeStyles({
  particlesCanva: {
    position: "absolute",
    left: '0',
    top: '0',
    width: '100%',
    height: '100%',
    zIndex: '-1'
  },
  wrp: {
    display: 'flex',
    width: '40%',
    flexDirection: 'column',
    paddingLeft: '2rem',
    position: 'absolute',
    top: '50%',
    transform: 'translate(0%, -50%)'
  },
  text: {
    color: '#fff',
    fontSize: '1.5rem'
  },
  btn: {
    width: '10rem',
    height: '3rem',
    color: '#fff',
    
    textTransform: 'none',

    cursor: 'pointer',
    marginBottom: '2rem',

    borderRadius: '2px',
    transition: 'all .3s',

    position: 'relative',
    '&:after': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: -2,
    },
    '&:before': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%',
      height: '0%',
      backgroundColor: '#fff',
      transition: 'all .3s',
      zIndex: -1,
    },
    '&:hover': {
      color: '#000',
      '&:before': {
        height: '100%',
        borderRadius: '2px',
      }
    },
  },
  items: {
    display: 'flex'
  },
  item: { 
    color: 'white',
    marginRight: '1.5rem',
    transition: 'all .4s',

    '&:hover': { 
      transform: 'scale(1) translateY(-50%)'
    }

  }
})

function Home() {
  const css = useStyles();

  return (
    <Box component='main'>
      <Particles className={css.particlesCanva}
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
      <div className={css.wrp}>
        <p className={css.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, libero nulla! Molestiae quae culpa perspiciatis vitae, libero quos nisi aut. Necessitatibus eaque omnis dolores! Asperiores laboriosam rerum sit quae nam.</p>
        <Button className={css.btn}>Download my resume</Button>
        <div className={css.items}>
          <a rel="noreferrer" className={css.item} href="https://github.com/Anndersonn" target="_blank"><GitHubIcon /></a>
          <a rel="noreferrer" className={css.item} href="https://www.linkedin.com/in/andrzej-slobodianyk-746a96177/" target="_blank"><LinkedIn /></a>
          <a rel="noreferrer" className={css.item} href="https://www.facebook.com/profile.php?id=100006173475893" target="_blank"><Facebook /></a>
        </div>
      </div>
    </Box>
  )
}

export default Home;