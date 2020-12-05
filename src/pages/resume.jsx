import { React, useRef } from 'react';
import { Typography, Box, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { gsap } from 'gsap';
import { useEffect, useState } from 'react';
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
            textAlign: 'end'
          },
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

    const wrapperRef = useRef(null)

    useEffect(() => {
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
        // revealRefs.current.forEach((el, index) => {

        //     gsap.fromTo(el, {
        //         autoAlpha: 0
        //     }, {
        //         duration: 1,
        //         autoAlpha: 1,
        //         ease: 'none',
        //         scrollTrigger: {
        //             id: `section-${index+1}`,
        //             trigger: el,
        //             start: 'top center+=100',
        //             toggleActions: 'play none none reverse'
        //         }
        //     });

        // });
    }, []);

    const [sections, setSections] = useState ([
        {
            proffesion: 'web design',
            company: 'company name where worked',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae distinctio, nisi illo recusandae debitis perspiciatis sapiente adipisci eligendi nostrum dolorem provident veniam quia doloremque possimus. Quam rerum labore voluptas dolorem?Incidunt sequi nulla repudiandae qui voluptatibus, dicta nemo rem quae delectus eius rerum. Laudantium voluptatibus perferendis praesentium similique, est libero necessitatibus corporis ea, rem tenetur ipsa cum provident! Eaque, culpa.',
            year: '2017'
        },
        {
            proffesion: 'web design',
            company: 'company name where worked',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae distinctio, nisi illo recusandae debitis perspiciatis sapiente adipisci eligendi nostrum dolorem provident veniam quia doloremque possimus. Quam rerum labore voluptas dolorem?Incidunt sequi nulla repudiandae qui voluptatibus, dicta nemo rem quae delectus eius rerum. Laudantium voluptatibus perferendis praesentium similique, est libero necessitatibus corporis ea, rem tenetur ipsa cum provident! Eaque, culpa.',
            year: '2018'
        },
        {
            proffesion: 'web design',
            company: 'company name where worked',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae distinctio, nisi illo recusandae debitis perspiciatis sapiente adipisci eligendi nostrum dolorem provident veniam quia doloremque possimus. Quam rerum labore voluptas dolorem?Incidunt sequi nulla repudiandae qui voluptatibus, dicta nemo rem quae delectus eius rerum. Laudantium voluptatibus perferendis praesentium similique, est libero necessitatibus corporis ea, rem tenetur ipsa cum provident! Eaque, culpa.',
            year: '2019'
        }
    ])

    return (
        <Box>
            <Box className={classes.firstPage}>
                <Typography className={classes.title}> Working Experience</Typography>
            </Box>
            {sections.map(( section) => (

            <Grid item md={8} className={classes.contentContainer}>
                <Typography ref={wrapperRef} className={classes.year}>{section.year}</Typography>
                    <Grid className={classes.textWrapper}>
                        <Typography className={classes.proffesion}>{section.proffesion}</Typography>
                        <Typography className={classes.company}>{section.company}</Typography>
                <Typography className={classes.text}>{section.text}</Typography>
                    </Grid>
               
            </Grid>
             ))
            }
        </Box>

    )
}

export default Resume;