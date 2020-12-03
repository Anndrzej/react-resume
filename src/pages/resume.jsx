import React from 'react';
import { Typography, Box, Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { gsap } from 'gsap';
import { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const useStyles = makeStyles(theme => ({
    firstPage: { 
         height: '100vh'
    },
    title: { 
        textAlign: 'center',
        marginTop: '3rem',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: '3rem'
    },
    textWrapper: {
        margin: '0 auto',
        padding: '1rem',
        backgroundColor: '#26262a',
        boxShadow: '0px 0px 20px 3px rgba(0,0,0,0.36)',
        marginBottom: '15rem'
      },
      company: { 
          color: 'rgb(249, 108, 119)',
          textTransform: 'capitalize',
            textAlign: 'center'
      },
      text: { 
          color: '#fff',
          textAlign: 'center',
          padding: '0.5rem'
      },
      proffesion: { 
          textTransform: 'uppercase',
          color: 'white',
          fontSize: '2rem',
          fontWeight: 'bold',
          textAlign: 'center'
      },
      year: { 
          fontSize: '8rem',
          fontWeight: 'bold',
          color: '#2b2c2f', 
      }
}));

function Resume() {
    const classes = useStyles();

    // GSAP

    useEffect(( ) => { 
        gsap.from('.test', { 
            duration: 3,
            y: '100',
            opacity: 0,
            ease: 'ease-in',
            scrollTrigger: {
                trigger: '.year',
                start: 'top 90%',
                end: 'bottom 60%',
                markers: true,
                toggleActions: 'restart complete reverse reset'
            }
        })
    }, []);

    return (
        <Container>
            <Box className={classes.firstPage}> 
                <Typography className={classes.title}> Working Experience</Typography>
            </Box>
            <Box component='div'>
            <Typography className={`year ${classes.year}`}> 2017 </Typography>
                <Grid item md={8} className={`test ${classes.textWrapper}`}>
                    <Typography className={classes.proffesion}>web design</Typography>
                    <Typography className={classes.company}>company name where worked</Typography>
                    <Typography className={classes.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae distinctio, nisi illo recusandae debitis perspiciatis sapiente adipisci eligendi nostrum dolorem provident veniam quia doloremque possimus. Quam rerum labore voluptas dolorem?Incidunt sequi nulla repudiandae qui voluptatibus, dicta nemo rem quae delectus eius rerum. Laudantium voluptatibus perferendis praesentium similique, est libero necessitatibus corporis ea, rem tenetur ipsa cum provident! Eaque, culpa.</Typography>
                </Grid>
                <Typography className={classes.year}> 2015 </Typography>
                <Grid item md={8} className={classes.textWrapper}>
                    <Typography className={classes.proffesion}>web design</Typography>
                    <Typography className={classes.company}>company name where worked</Typography>
                    <Typography className={classes.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente praesentium tempora id! Eligendi eaque repellat, repudiandae placeat dolores asperiores quasi laboriosam veniam necessitatibus dolore ratione aspernatur fugiat incidunt facilis reiciendis.Aspernatur velit adipisci at quisquam veniam molestias architecto, sapiente praesentium suscipit hic optio voluptate nisi id aperiam animi laborum aliquid, cumque dolor molestiae, totam quae. Suscipit harum ipsam voluptatum fuga.</Typography>
                </Grid>
                <Typography className={classes.year}> 2013 </Typography>
                <Grid item md={8} component='div' className={classes.textWrapper}>
                    <Typography className={classes.proffesion}>web design</Typography>
                    <Typography className={classes.company}>company name where worked</Typography>
                    <Typography className={classes.text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis ipsa quos laboriosam perferendis, similique inventore, dolor quasi iure, nesciunt tenetur assumenda laborum animi debitis asperiores sint quod velit cupiditate aperiam.Facilis esse temporibus, asperiores culpa perferendis beatae! Accusamus, obcaecati? Distinctio soluta harum veniam ratione possimus natus in aliquam quis. Nisi debitis eum perferendis nemo praesentium consectetur harum voluptatibus at eos!</Typography>
                </Grid>
            </Box>
        </Container>

    )
}

export default Resume;