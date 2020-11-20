import React from 'react';
import { Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    mainContainer: {
        background: 'tan'
    }
})

function Resume() {
    const classes = useStyles();
    return (
        <Box component='header' className={classes.mainContainer}>
            <Typography variant='h4' align='center'>Working experience</Typography>
        </Box>
    )
}

export default Resume;