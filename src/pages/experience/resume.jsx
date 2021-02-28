import { React, useRef } from 'react';
import { Typography, Box, Grid, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { gsap } from 'gsap';
import { useEffect, useState } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import css from './resume.module.css';

gsap.registerPlugin(ScrollTrigger);

const useStyles = makeStyles(theme => ({
  dots: {
    position: 'absolute',
    zIndex: '-1',

    width: '100%',
  },
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
  },
  box: {
    position: 'relative',
    width: '35rem',
    height: '15rem',
    borderRadius: '10px',
    boxShadow: '0 0 2px',
    marginBottom: '3rem',
    transition: 'all .2s linear',
    cursor: 'pointer',  
    '&:hover': {
      border: '6px solid rgb(249, 108, 119)',
      display: 'block',
    },
    [theme.breakpoints.down('sm')]: {
      margin: 'auto',
      marginBottom: '3rem',
    },
  },
  img: {
    position: 'relative',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    width: '100%',
    height: '100%',
    borderRadius: '5px',
    zIndex: '-1',
  },

  firstPortfolio: {
    cursor: 'pointer',
    borderRadius: '10px',
    boxShadow: '0 0 2px ',
    width: '50rem',
    margin: '3rem 0 3rem 0',
    transition: 'all .2s linear',

    '&:hover': {
      border: '6px solid rgb(249, 108, 119)',
    },
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
      x: 150,
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

  const [sections] = useState([
    {
      proffesion: 'Accountant Assistant',
      company: 'Gemix Legal Advisors',
      text: (
        <>
          <li>Accounts keeping</li>
          <li>managing tax assets</li>
          <li>managing documents flow</li>
          <li>
            Verification of documents provided by the principal as for their
            compliance formal and applicable law
          </li>
          <li>Preparation of cash reports</li>
          <li>Contact with clients in Russian, Ukrainian and English languages</li>
        </>
      ),
      year: '2017',
    },
    {
      proffesion: 'Accountant',
      company: 'Tax office Milton',
      text: (
        <>
          <li>Keeping a book of revenues and expenses</li>
          <li>Accounts keeping</li>
          <li>
            Preparing the financial result after each closed month relating to the
            activities
          </li>
          <li>Preparing PIT and VAT tax declarations to the tax department</li>
          <li>Keeping VAT records</li>
          <li>management of personnel affairs</li>
        </>
      ),
      year: '2018',
    },
  ]);

  const [works] = useState([
    {
      work: '/',
      link: 'https://linkedin-clone-4a118.web.app/',
      img:
        'https://www.kinesisinc.com/wp-content/uploads/2020/04/linkedin-101-hero@2x.png',

    },
    {
      work: '/',
      link: 'https://clone-e2445.web.app/',
      img:
        'https://cdn.vox-cdn.com/thumbor/8fWz6qpiMYMsZhY4vrc9Vhl5yL8=/0x110:1320x770/fit-in/1200x600/cdn.vox-cdn.com/uploads/chorus_asset/file/21939811/newgmaillogo.jpg',

    },
    {
      work: '/',
      link: 'http://anderson.ga/Food/',
      img: '/img/food.jpg',

    },
    {
      work: '/',
      link: 'http://anderson.ga/ActiveBox/',
      img: '/img/activebox.jpg',

    },
    {
      work: '/',
      link: 'http://anderson.ga/rock-paper-scissors.github.io/',
      img: '/img/app1.jpg',

    },
    {
      work: '/',
      link: 'http://anderson.ga/tic-tac-toe.github.io/',
      img: '/img/app2.jpg',

    },
  ]);

  return (
    <Box>
      <Box className={classes.firstPage}>
        <Typography className={classes.title}> Working Experience</Typography>
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
        <Typography className={classes.dialog}>
          Unfortunatly, i don't have any commercial experience, but i practicing
          every day. Below, u can look on a few projects, which i have made during my
          studying.
        </Typography>
      </Container>
      <Container>
        <Box className={classes.wrp}>
          {works.map((works, key) => (
            <Box className={classes.box} key={key}>

              <a
                className={classes.link}
                href={works.link}
                target="_blank"
                rel="noreferrer"
              >
                <img src={works.img} className={classes.img} alt="img"></img>
              </a>
            </Box>
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
