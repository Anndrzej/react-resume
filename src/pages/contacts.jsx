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

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

const Contacts = () => {
    const classes = useStyles()

    const handleSubmit = e => {
      fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({ 'form-name': 'contact' }),
          })
            .then(() => alert('success')) // успех)
            .catch(error => alert(error));
      e.preventDefault();

    }

    return (
        <Box component='div'>
            <Grid container justify='center'>
                <Box
                    component='form'
                    name='contacts'
                    action='/contacts'
                    method='post'
                    className={classes.form}
                    onSubmit={handleSubmit}
                >
                    <Typography variant='h5' className={classes.title}>
                        contact me
                    </Typography>
                    <InputField type='hidden' name='form-name' value='contacts' />
                    <InputField
                        required
                        fullWidth={true}
                        label='Name'
                        variant='outlined'
                        inputProps={{ style: { color: 'white' } }}
                        margin='dense'
                        size='small'
                        type="text"
                        name="name" />

                    <InputField
                        required
                        fullWidth={true}
                        label='Email'
                        variant='outlined'
                        inputProps={{ style: { color: 'white' } }}
                        margin='dense'
                        size='small'
                        type="email"
                        name="email" />

                    <InputField
                        required
                        fullWidth={true}
                        label='Company name'
                        variant='outlined'
                        inputProps={{ style: { color: 'white' } }}
                        margin='dense'
                        size='small'
                        type="text"
                        name="company" />

                    <InputField
                        required
                        fullWidth={true}
                        multiline={true}
                        rows={5}
                        label='Message'
                        variant='outlined'
                        inputProps={{ style: { color: 'white' } }}
                        margin='dense'
                        size='small'
                        name="message" />

                    <Button
                        className={classes.button}
                        variant='outlined'
                        fullWidth={true}
                        endIcon={<SendIcon />}
                        type='submit'>
                        contact me
                    </Button>
                </Box>
            </Grid>
        </Box>
    );
};

export default Contacts;