import React from 'react'
import { Container, Box, BottomNavigation, List, ListItem, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import { LinkedIn, Facebook } from '@material-ui/icons';
import MailIcon from '@material-ui/icons/Mail';


const contactLinks = [
    {
        github: 'https://github.com/Anndersonn'
    },
    {
        linkedin: 'https://www.linkedin.com/in/andrzej-slobodianyk-746a96177/'
    },
    {
        facebook: 'https://www.facebook.com/profile.php?id=100006173475893'
    }
]

const useStyle = makeStyles(theme => ({
    box: {

        backgroundColor: '#26262a',
        border: '2px solid black',
        borderTopLeftRadius: '10px',
        borderTopRightRadius: '10px',
        position: 'absolute',
        bottom: '0',
        width: '1200px',

        display: 'flex',
        justifyContent: 'space-between'
    },
    icons: { 
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    linkIcons: { 
        marginRight: '3rem',
        fill: '#f50a0a'
    },
    mailItems: { 
        alignItems: 'center',
        display: 'flex'
    },
    mailLink: { 
        marginLeft: '3rem',
        fill: '#f50a0a'
    },
    mailText: { 
        marginLeft: '3rem',
        color: 'white'
    }
}));

function Footer() {

    const classes = useStyle()

    return (
        <footer>
            <Container>
                <BottomNavigation className={classes.box}>
                    <Box className={classes.mailItems}>
                        <MailIcon className={classes.mailLink}></MailIcon>
                        <Typography className={classes.mailText}>slobodjanik1997@gmail.com</Typography>
                    </Box>
                    <ListItem className={classes.icons}>
                        <a rel="noreferrer" className={classes.linkIcons} href="https://github.com/Anndersonn" target="_blank"><GitHubIcon /></a>
                        <a rel="noreferrer" className={classes.linkIcons} href="https://www.linkedin.com/in/andrzej-slobodianyk-746a96177/" target="_blank"><LinkedIn /></a>
                        <a rel="noreferrer" className={classes.linkIcons} href="https://www.facebook.com/profile.php?id=100006173475893" target="_blank"><Facebook /></a>
                    </ListItem>
                </BottomNavigation>
            </Container>
        </footer>
    )
}

export default Footer;
