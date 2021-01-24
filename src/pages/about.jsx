import { Box, Grid, Typography, Container, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import dots from '../img/dotted-shape.png';
import Interesting from '@material-ui/icons/EmojiObjects';
import React, { useState } from 'react';
import Heroes from '../modal/heroes';
import Me from '../img/photo.jpg'

const useStyle = makeStyles(theme => ({
  wrapper: {
    margin: '0 auto',

  },
  title: {
    color: '#2b2c2f',
    fontSize: '8rem',
    fontWeight: 'bold',
    textTransform: 'capitalize',
    [theme.breakpoints.down('xs')]: {
      fontSize: '5rem',
    }
  },
  textWrapper: {
    position: 'absolute',
    display: 'flex',
    width: '50%',
    top: '60%',
    left: '50%',
    right: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: '1000',
    margin: '0 auto',
    backgroundColor: '#26262a',
    boxShadow: '0px 0px 20px 3px rgba(0,0,0,0.36)',
    [theme.breakpoints.down('md')]: {
      width: '90%',
      top: '55%',
      left: '28%',
      margin: '0 auto',
      zIndex: '1000',
      position: 'absolute',
      transform: 'translate(-25%, -50%)',

    },
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      alignItems: 'center',
      top: '70%',
    },
  },
  aboutText: {
    fontSize: '1rem',
    color: 'white',
    '&:nth-of-type(1n)': {
      paddingTop: '2rem'
    },
    '&:nth-of-type(3n)': {
      paddingBottom: '2rem'
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '1rem'
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.7rem',
      padding: '0rem 1rem 0rem 1rem'
    },
    
  },
  btn: {
    width: '15rem',
    height: '3.8rem',
    marginTop: '1rem',
    marginBottom: '1rem',
    fontSize: '1rem',

    textTransform: 'none',
    cursor: 'pointer',
    color: '#fff',
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
      backgroundColor: '#f96c77',
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
  int: {
    fill: 'yellow',
    zIndex: '1500',
    cursor: 'pointer',

    transition: '.2s linear',
    '&:hover': {
      transform: 'translateY(-30%)'
    }
  },
  dots: {
    marginTop: '3rem',
    float: 'right',
    [theme.breakpoints.down('sm')]: {
      marginTop: '5rem',
    }
  },
  about: { 
    padding: '1rem 2rem 1rem 2rem',
    [theme.breakpoints.down('sm')]: {
      padding: '0'
    },
  },

  user: { 
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 'auto',
    padding: '2rem 2rem 1rem 2rem',
    [theme.breakpoints.down('md')]: {
      margin: '0 auto'
    }
  },
  me: { 
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    marginBottom: '2rem'
  },

}));

function About() {

  const [state, setState] = useState(false);

  const modal = {
    opacity: '1'
  }

  const classes = useStyle();

  return (
    <Box component='div'>
      <Container className={classes.wrapper}>
        <Grid item xs={12}>
          <Typography className={classes.title}>About</Typography>
        </Grid>
        <Box className={classes.textWrapper}>
          <Grid item md={12} xs={12} className={classes.about}>
            <Typography component='p' className={classes.aboutText}>My name is <span style={{ color: '#f96c77' }}>Andrzej Slobodianyk</span> and I’m a Junior Front-End Developer. I have studied Accounting and Finanse at the University of Banking in Wrocław and now I have successfully transferred my passion to programming languages.</Typography>
            <Typography component='p' className={classes.aboutText}>
              Now I wish to fully devote myself to a Front-End Developer job. My main professional goal is to find a job that will give me an opportunity to deepen and improve previously acquired programming skills, engage in interesting and creative projects and raise my Front-End development qualifications.
        </Typography>
            <Typography component='p' className={classes.aboutText}>
              Mainly I want to focus on learning JavaScript. Also, I put a lot of work to write a clear and semantically correct code.
        </Typography>
          </Grid>
          <Grid item md={5} xs={12} className={classes.user}>
            <img className={classes.me} src={Me} alt="me"/>
            <Typography style={{ color: '#f96c77' }}>Junior Front-End developer</Typography>
            <Button href="../../CV_Andrzej_Slobodianyk.pdf" download="resume" className={classes.btn}>Download my resume</Button>
            {state && <Heroes style={state ? modal.opacity : null} />}
            <Interesting onClick={() => setState(state => !state)} className={classes.int} />
          </Grid>
        </Box>
        <Grid className={classes.dots} component='img' src={dots} item xs={8} sm={5} md={3} />
      </Container>
    </Box>
  )
}

export default About
