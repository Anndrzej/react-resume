import React from 'react';
import Particles from 'react-particles-js';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button } from '@material-ui/core';
import { LinkedIn, Facebook } from '@material-ui/icons';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Link } from 'react-router-dom';


const useStyles = makeStyles(theme => ({
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
    transform: 'translate(0%, -50%)',
    [theme.breakpoints.down('sm')]: {
      width: '80%'
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    }
  },
  text: {
    color: '#fff',
    fontSize: '1.5rem',
    [theme.breakpoints.down('xs')]: { 
      fontSize: '1rem'

    }
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

  },
  link: { 
    textDecoration: 'none',
    color: 'rgb(247 145 153 / 88%)',
    transition: '.2s linear',
    '&:hover': { 
      color: 'rgb(249, 108, 119)'
    }
  }
}))

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
        <p className={css.text}>Hi! Welcome to my portfolio website. My name is Andrzej and i'm currently looking for a job as a Front-End developer. Feel free to let me know by the links below or by the <Link className={css.link} to='/contacts'>contact page</Link>  if you are interested in my candidature.</p>
        <Button href="../../CV_Andrzej_Slobodianyk.pdf" download="resume" className={css.btn}>Download my resume</Button>
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