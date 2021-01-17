import React, { useState } from 'react';
import { AppBar, Toolbar, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import SideBar from '@material-ui/core/Drawer';
import logo from '../img/my-logo.png';
import Navbar from './navbar/navbar';


const useStyle = makeStyles(theme => ({
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

  '@global': {
    '.MuiAppBar-positionFixed': {
      position: 'unset'
    },
    '.MuiPaper-root': {
      backgroundColor: '#000'
    }
  }

}));



function Header() {
  const [state, setState] = useState({
    right: false        // hidden from the right side by default
  })

  const toggleSlider = (slider, open) => () => {
    setState({ ...state, [slider]: open });
  };

  const classes = useStyle();

  return (
    <Box component='nav'>
      <AppBar style={{ background: '#222' }}>
        <Toolbar>
          <div className={classes.burger} onClick={() => setState(!state)}>
            <div className={classes.line}></div>
            <div className={classes.line}></div>
            <div className={classes.line}></div>
          </div>
          <img className={classes.logo} src={logo} alt='logo'></img>
          <SideBar anchor='top' open={state} onClick={() => setState(false)}>
            <Navbar />
          </SideBar>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header;
