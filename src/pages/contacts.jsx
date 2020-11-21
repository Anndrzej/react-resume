import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { TextField, Typography, Button, Grid, Box } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles(theme => ({
    form: {
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        position: 'absolute',
        textAlign: 'center',
        [theme.breakpoints.down('md')]: {
            width: '70%'
        },
        [theme.breakpoints.down('sm')]: {
            width: '100%'
        }
    },
    button: {
        marginTop: '1rem',
        color: 'white',
        borderColor: 'white',
        width: '41%'
    },
    title: {
        textTransform: 'uppercase',
        color: 'white',
        textAlign: 'center'
    },

}))

const InputField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: 'white'
        },
        '& label': {
            color: 'white'
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'white'
            },
            '&:hover fieldset': {
                borderColor: 'white'
            },
            '&.Mui-focused fieldset': {
                borderColor: 'white'
            }
        },
        width: '60%',
    },
})(TextField);

const Contacts = () => {

    const classes = useStyles()


    return (
        <Box component='div'>
            <Grid container justify='center'>
                <Box component='form' className={classes.form}>
                    <Typography variant='h5' className={classes.title}>
                        contact me
                    </Typography>
                    <InputField fullWidth={true} label='Name' variant='outlined' inputProps={{ style: { color: 'white' } }} margin='dense' size='small' />
                    <InputField fullWidth={true} label='Email' variant='outlined' inputProps={{ style: { color: 'white' } }} margin='dense' size='small' />
                    <InputField fullWidth={true} label='Company name' variant='outlined' inputProps={{ style: { color: 'white' } }} margin='dense' size='small' />
                    <InputField fullWidth={true} multiline={true} rows={5} label='Message' variant='outlined' inputProps={{ style: { color: 'white' } }} margin='dense' size='small' />
                    <Button className={classes.button} variant='outlined' fullWidth={true} endIcon={<SendIcon />}>
                        contact me
                    </Button>
                </Box>
            </Grid>
        </Box>
    );
};

export default Contacts;