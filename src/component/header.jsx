import React, { useState } from 'react';
import { AppBar, Toolbar, ListItem, IconButton, List, Typography, Box, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import SideBar from '@material-ui/core/Drawer';
import { Link } from 'react-router-dom';
import logo from '../img/my-logo.png';
import s from './header.module.css'


const useStyle = makeStyles(theme => ({
  menuSliderContainer: {
    width: '100vw',
    height: '100vh',
    margin: '0 auto',
  },
  burger: {
    cursor: 'pointer',
    width: '20px',
    height: 'auto',
    zIndex: '1500',

    '&:hover div:nth-child(2)': {
      width: '10px'
    },
  },
  line: {
    width: '20px',
    height: '2px',
    backgroundColor: '#fff',
    marginTop: '.2rem',
    cursor: 'pointer',
    transition: '.2s linear',
  },
  closeIcon: {
    color: "#fff",
    position: 'absolute',
    top: '0%',
    left: '0%',
    transform: 'translate(50%, 17%)',
    [theme.breakpoints.down('sm')]: {
      transform: 'translate(20%, 17%)'
    },
    [theme.breakpoints.down('xs')]: {
      transform: 'translate(5%, 17%)'
    }
  },
  logo: { 
    width: '40px',
    height: '40px', 
    position: 'absolute',
    zIndex: '1500',
    right: '1rem'
  },
  // listItem: {
  //   color: '#fff',
  //   padding: '1rem',
  //   margin: '0',
  //   height: '100vh',
  //   width: '20%',
  //   display: 'inline-flex',
  //   flexDirection: 'column',
  //   alignItems: 'start',

  //   backgroundColor: '#000',
  //   '&:after': {
  //     content: '""',
  //     position: 'absolute',
  //     top: '0',
  //     left: '0',
  //     right: '0',
  //     bottom: '0',
  //     borderLeft: '1px solid #fff',
  //     borderRight: '1px solid #fff',
  //   },

  //   '&:hover': {
  //     color: '#000',
  //     backgroundColor: '#fff',
  //     transition: '.5s linear',
  //   },
  //   [theme.breakpoints.down('sm')]: {
  //     width: '50%',
  //     height: '50vh',
  //     borderBottom: '1px solid #fff',
  //     '&:last-child': {
  //       width: '100%',
  //     }
  //   },
  //   [theme.breakpoints.down('xs')]: {
  //     width: '100%',
  //   }
  // },
  title: {
    fontSize: '2rem',
    fontWeight: '100',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.3rem',
      padding: '0',
    },
  },
  num: {
    fontSize: '4rem',
    fontWeight: 'bold',

    marginTop: '5rem',
    [theme.breakpoints.down('xs')]: {
      fontSize: '2rem',
    },

  },
  about: {
    position: 'absolute',
    bottom: '5%',

    color: 'black',
    fontSize: '.7rem',
  },
  '@global': {
    '.MuiAppBar-positionFixed': {
      position: 'unset'
    },
    '.MuiPaper-root': {
      backgroundColor: '#000'
    }
  }

}));


const menuItems = [
  {
    id: 1,
    listText: 'Home',
    listName: 'Home Page',
    listPath: '/',
    listNum: '1',
    listAbout: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut suscipit illum asperiores eveniet, autem inventore itaque vitae aliquid, animi ut fuga ipsa impedit iusto quae alias eum corporis iste quisquam.'
  },
  {
    id: 2,
    listText: 'Resume',
    listName: 'Resume Page',
    listPath: '/resume',
    listNum: '2',
    listAbout: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut suscipit illum asperiores eveniet, autem inventore itaque vitae aliquid, animi ut fuga ipsa impedit iusto quae alias eum corporis iste quisquam.'
  },
  {
    id: 3,
    listText: 'Skills',
    listName: 'Skills Page',
    listPath: '/skills',
    listNum: '3',
    listAbout: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut suscipit illum asperiores eveniet, autem inventore itaque vitae aliquid, animi ut fuga ipsa impedit iusto quae alias eum corporis iste quisquam.'
  },
  {
    id: 4,
    listText: 'Contacts',
    listName: 'Contacts Page',
    listPath: '/contacts',
    listNum: '4',
    listAbout: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut suscipit illum asperiores eveniet, autem inventore itaque vitae aliquid, animi ut fuga ipsa impedit iusto quae alias eum corporis iste quisquam.'
  },
  {
    id: 5,
    listText: 'About',
    listName: 'About Page',
    listPath: '/about',
    listNum: '5',
    listAbout: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut suscipit illum asperiores eveniet, autem inventore itaque vitae aliquid, animi ut fuga ipsa impedit iusto quae alias eum corporis iste quisquam.'
  }

]

function Header() {
  const [state, setState] = useState({
    right: false        // hidden from the right side by default
  })

  const toggleSlider = (slider, open) => () => {
    setState({ ...state, [slider]: open });
  };

  const classes = useStyle();

  const sideList = () => (
    <Grid item xs={9} sm={10} className={classes.menuSliderContainer} component="div">
      <List style={{ padding: '0' }}>
        {menuItems.map((lsitem, key) => (
          <ListItem className={s.listItem} key={key} component={Link} to={lsitem.listPath}>
            <Typography className={classes.num}>{lsitem.listNum}</Typography>
            <Typography className={classes.title}>{lsitem.listText}</Typography>
            <Typography className={classes.about}>{lsitem.listAbout}</Typography>
          </ListItem>
        ))}
      </List>
    </Grid>
  )

  return (
    <Box component='nav'>
      <AppBar style={{ background: '#222' }}>
        <Toolbar>
          <div className={classes.burger} onClick={toggleSlider('right', true)}>
            <div className={classes.line}></div>
            <div className={classes.line}></div>
            <div className={classes.line}></div>
          </div>
          <img className={classes.logo} src={logo} alt='logo'></img>
          <SideBar anchor='top' open={state.right} onClick={toggleSlider('right', false)}>
            <IconButton className={classes.closeIcon} onClick={toggleSlider('right', false)}>
            </IconButton>
            {sideList('right')}
          </SideBar>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header;
