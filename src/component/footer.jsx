import React from 'react'
import { Container, Box, BottomNavigation } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyle = makeStyles(theme => ({
    box: { 

        backgroundColor: '#26262a',
        border: '2px solid black',
        borderTopLeftRadius: '10px',
        borderTopRightRadius: '10px',
        position: 'absolute',
        bottom: '0',
        width: '1200px'
    }
}));

function Footer() {

    const classes = useStyle()

    return (
        <footer>
            <Container>
                <BottomNavigation className={classes.box}>
                    <h2>hello footer</h2>
                </BottomNavigation>
            </Container>
        </footer>
    )
}

export default Footer;
