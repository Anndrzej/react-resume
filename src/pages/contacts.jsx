import { React, useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { TextField, Typography, Button, Grid, Box } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import css from './contacts.module.css';
import HomeIcon from '@material-ui/icons/Home';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';



const useStyles = makeStyles(theme => ({
    contactContainer: {
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        position: 'absolute',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between'
    },
    form: {
        textAlign: 'center',
        margin: 'auto',
        order: 2,
        [theme.breakpoints.up("md")]: {
            order: 3
        },
        [theme.breakpoints.down("sm")]: {
            marginTop: '25rem',
            marginBottom: '3rem'
        }
    },
    button: {
        marginTop: '1rem',
        color: 'white',
        borderColor: 'white',
        width: '44%',
        [theme.breakpoints.down("md")]: {
            width: '55%'
        }
    },
    subtitle: {
        textTransform: 'uppercase',
        color: 'white',
        textAlign: 'center'
    },
    mainText: {
        textTransform: 'uppercase',
        color: 'white',
        fontSize: '1.5rem',
        fontWeight: 'bold',
        [theme.breakpoints.down("sm")]: {
          fontSize: '1rem'
        }
    },
    subText: {
        textTransform: 'uppercase',
        color: 'white',
        [theme.breakpoints.down("sm")]: {
            fontSize: '.6rem'
          }
    },
    contactItems: {
        margin: 'auto',
        alignItems: 'center',
        order: 3,
        [theme.breakpoints.up("md")]: {
            order: 2,
        }
    },
    title: {
        color: '#2b2c2f',
        fontSize: '8rem',
        fontWeight: 'bold',
        textTransform: 'capitalize',
        paddingTop: '1rem',
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    }
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
    },
})(TextField);

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}

const Contacts = () => {
    const classes = useStyles()

    const [data, setData] = useState({ name: '', email: '', message: '', company: '' })

    const handleSubmit = e => {
        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({ 'form-name': 'contact', ...data }),
        })
            .then(() => alert('success')) // успех)
            .catch(error => alert(error));
        e.preventDefault();

    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setData({
            ...data,
            [name]: value
        })
    }
    return (
        <Box component='div'>
            <Grid item sm={11} style={{margin: 'auto'}}>
                <Typography className={classes.title}>Contact</Typography>
            </Grid>
            <Grid container item md={12} className={classes.contactContainer}>
                <Grid item md={4} xs={8} className={classes.contactItems}>
                    <Box className={css.contactBox}>
                        <Box className={css.circleWrapper}>
                            <Box className={css.circle} />
                            <PhoneIcon className={css.icon} />
                        </Box>
                        <Box>
                            <Typography className={classes.mainText}>Call me</Typography>
                            <Typography className={classes.subText}>577077387</Typography>
                        </Box>
                    </Box>
                    <Box className={css.contactBox}>
                        <Box className={css.circleWrapper}>
                            <Box className={css.circle} />
                            <MailIcon className={css.icon} />
                        </Box>
                        <Box>
                            <Typography className={classes.mainText}>Text me</Typography>
                            <Typography className={classes.subText}>slobodjanik1997@gmail.com</Typography>
                        </Box>
                    </Box>
                    <Box className={css.contactBox}>
                        <Box className={css.circleWrapper}>
                            <Box className={css.circle} />
                            <HomeIcon className={css.icon} />
                        </Box>
                        <Box>
                            <Typography className={classes.mainText}>Address</Typography>
                            <Typography className={classes.subText}>Jaworska 5, Wroclaw</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid
                    item md={4} xs={9}
                    component='form'
                    name='contacts'
                    className={classes.form}
                    onSubmit={handleSubmit}
                >
                    <Typography variant='h5' className={classes.subtitle}>
                        send message
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
                        name="name"
                        value={data.name}
                        onChange={handleChange} />

                    <InputField
                        required
                        fullWidth={true}
                        label='Email'
                        variant='outlined'
                        inputProps={{ style: { color: 'white' } }}
                        margin='dense'
                        size='small'
                        type="email"
                        name="email"
                        value={data.email}
                        onChange={handleChange} />

                    <InputField
                        required
                        fullWidth={true}
                        label='Company name'
                        variant='outlined'
                        inputProps={{ style: { color: 'white' } }}
                        margin='dense'
                        size='small'
                        type="text"
                        name="company"
                        value={data.company}
                        onChange={handleChange} />

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
                        name="message"
                        value={data.message}
                        onChange={handleChange} />

                    <Button
                        className={classes.button}
                        variant='outlined'
                        fullWidth={true}
                        endIcon={<SendIcon />}
                        type='submit'>
                        contact me
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Contacts;