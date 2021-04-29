import { React, useRef } from 'react';
import { Typography, Box, Grid, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { gsap } from 'gsap';
import { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import css from './resume.module.css';
import { works } from '../../helpers/pages/resume/resume'
import { sections } from '../../helpers/pages/resume/resume'


gsap.registerPlugin(ScrollTrigger);

const useStyles = makeStyles(theme => ({
  firstPage: {
    height: '100vh',
  },
  title: {
    textAlign: 'center',
    marginTop: '5rem',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: '8rem',
    margin: '0',
    color: '#2b2c2f',
    [theme.breakpoints.down('sm')]: {
      fontSize: '3rem',
    },
  },
  textWrapper: {
    marginRight: 'auto',
    padding: '1rem',
    backgroundColor: '#26262a',
    boxShadow: '0px 0px 20px 3px rgba(0,0,0,0.36)',
    marginBottom: '15rem',
  },
  contentContainer: {
    '&:nth-of-type(3n)': {
      marginRight: '0',
      marginLeft: 'auto',
      textAlign: 'end',
    },
  },
  company: {
    color: 'rgb(249, 108, 119)',
    textTransform: 'capitalize',
    textAlign: 'center',
  },
  text: {
    color: '#fff',
    textAlign: 'start',
    padding: '0.5rem',
  },
  proffesion: {
    textTransform: 'uppercase',
    color: 'white',
    fontSize: '2rem',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  year: {
    fontSize: '8rem',
    fontWeight: 'bold',
    color: '#2b2c2f',
  },

  // info
  info: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',

    marginTop: '5rem',
    marginBottom: '5rem',
  },
  main: {
    fontWeight: 'bold',
    fontSize: '2rem',
    color: '#fff',
    textAlign: 'center'
  },
  dialog: {
    color: '#fff',
  },
  // works

  wrp: {
    borderTop: '2px solid #fff',
    display: 'flex',
    alignItems: 'center',
    paddingTop: '8rem',
    marginBottom: '8rem',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center'
    },
  },
  box: {
    position: 'relative',
    width: '30rem',
    height: '15rem',
    borderRadius: '10px',
    marginBottom: '3rem',
    transition: 'all .2s linear',
    cursor: 'pointer',
    [theme.breakpoints.down('sm')]: {
      margin: 'auto',
      marginBottom: '3rem',
      width: 'auto',
      height: 'auto'
    },
  },
  img: {
    position: 'relative',
    width: '100%',
    height: '100%',
    borderRadius: '5px',
    zIndex: '-1',
  },

  firstPortfolio: {
    cursor: 'pointer',
    borderRadius: '10px',
    boxShadow: '0 0 2px ',
    maxWidth: '100%',
    margin: '3rem 0 3rem 0',
    transition: 'all .2s linear',
  },
}));

function Resume() {
  const classes = useStyles();

  // GSAP

  const wrapperRef = useRef(null);

  const revealRefs = useRef([]);
  revealRefs.current = [];

  useEffect(() => {
    gsap.from(wrapperRef.current, {
      autoAlpha: 0,
      x: 0,
      ease: 'ease-in-out',
      delay: 1,
    });

    revealRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { autoAlpha: 0, x: -100 },
        {
          duration: 1,
          autoAlpha: 1,
          x: 0,
          scrollTrigger: {
            id: `section-${index + 1}`,
            trigger: el,
            start: 'top center+=100',
            toggleActions: 'play none none reverse',
          },
        },
      );
    });
  }, []);

  const addToRefs = el => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  //END GSAP



  return (
    <Box>
      <Box className={classes.firstPage}>
        <Typography className={classes.title}>Experience</Typography>
        <Box component="div" className={css.middle}>
          <Box className={css.mouse}></Box>
        </Box>
      </Box>
      {sections.map((section, key) => (
        <Grid
          item
          md={8}
          className={classes.contentContainer}
          key={key}
          ref={addToRefs}
        >
          <Typography className={classes.year}>{section.year}</Typography>
          <Grid ref={wrapperRef} className={classes.textWrapper}>
            <Typography className={classes.proffesion}>
              {section.proffesion}
            </Typography>
            <Typography className={classes.company}>{section.company}</Typography>
            <Typography className={classes.text}>{section.text}</Typography>
          </Grid>
        </Grid>
      ))}
      <Container className={classes.info}>
        <Typography className={classes.main}>My Works</Typography>
      </Container>
      <Container>
        <Box className={classes.wrp}>
          {works.map((works, key) => (
            <a
              key={key}
              href={works.link}
              target="_blank"
              rel="noreferrer"
            >
              <div className={classes.box}>
                <div className={css.dimmer}>
                  <img src={works.img} className={classes.img} alt="img"></img>
                  <p className={css.description}>{works.description}</p>
                </div>
              </div>
            </a>
          ))}
        </Box>
      </Container>
      <Container
        style={{
          borderTop: '1px solid #fff',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography className={classes.main} style={{ marginTop: '3rem' }}>
          My previous portfolio website
        </Typography>
        <a
          className={classes.firstPortfolio}
          href="http://anderson.ga/"
          target="_blank"
          rel="noreferrer"
        >
          <img className={classes.img} src="/img/first_portfolio.png" alt="" />
        </a>
      </Container>
    </Box>
  );
}

export default Resume;