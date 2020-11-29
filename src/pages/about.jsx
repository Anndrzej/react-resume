import { Box, Grid, Typography, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import dots from '../img/dotted-shape.png';
import React from 'react';

const useStyle = makeStyles(theme => ({
  wrapper: {
    margin: '0 auto',
    
  },
  title: {
    color: '#2b2c2f',
    fontSize: '8rem',
    fontWeight: 'bold',
    textTransform: 'capitalize',
    paddingTop: '1rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '5rem',
      paddingTop: '0'
    }
  },
  textWrapper: {
    position: 'absolute',
    top: '55%',
    left: '40%',
    transform: 'translate(-30%, -50%)',
    zIndex: '1000',
    margin: '0 auto',
    backgroundColor: '#26262a',
    boxShadow: '0px 0px 20px 3px rgba(0,0,0,0.36)',
    [theme.breakpoints.down('xs')]: {
      top: '65%',
      left: '30%',
      margin: '0 auto',
      zIndex: '1000',
      position: 'absolute',
      transform: 'translate(-25%, -50%)'
    }
  },
  aboutText: {
    fontSize: '1.3rem',
    color: 'white',
    padding: '1rem 2rem 1rem 2rem',
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
      padding: '0rem 2rem 0rem 2rem'
    }
  },
  dots: {
    marginTop: '5.5rem',
    float: 'right',
    [theme.breakpoints.down('sm')]: {
      marginTop: '8rem',
    }
  },
  
}));

function About() {

  const classes = useStyle();

  return (
    <Box component='div'>
      <Container className={classes.wrapper}>
        <Grid item xs={12}>
          <Typography className={classes.title}>About</Typography>
        </Grid>
        <Grid className={classes.textWrapper}>
          <Typography component='article' className={classes.aboutText}>My name is <span style={{ color: '#f96c77' }}>Andrzej Slobodianyk</span> and I’m a Junior Front-End Developer. I have studied Accounting and Finanse at the University of Banking in Wrocław and now I have successfully transferred my passion to programming languages.</Typography>
          <Typography component='article' className={classes.aboutText}>
            Now I wish to fully devote myself to a Front-End Developer job. My main professional goal is to find a job that will give me an opportunity to deepen and improve previously acquired programming skills, engage in interesting and creative projects and raise my Front-End development qualifications.
        </Typography>
          <Typography component='article' className={classes.aboutText}>
            Mainly I want to focus on learning JavaScript. Also, I put a lot of work to write a clear and semantically correct code.
        </Typography>
        </Grid>
        <Grid className={classes.dots} component='img' src={dots} item xs={8} sm={5} md={3}/>
      </Container>
    </Box>

  )
}

export default About
