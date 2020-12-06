import React, { useState } from 'react';
import { AppBar, Toolbar, ListItem, IconButton, List, Typography, Box, Grid } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core';
import SideBar from '@material-ui/core/Drawer';
import { Link } from 'react-router-dom';
import change from '../App.css'



const useStyle = makeStyles(theme => ({
  menuSliderContainer: {
    width: '100vw',
    height: '100vh',
    margin: '0 auto',
  },
  burgerIcon: {
    color: '#fff',
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
  listItem: { 
    position: 'relative',

    color: '#fff',
    padding: '1rem',
    margin: '0',
    height: '100vh',
    width: '20%',
    display: 'inline-flex',
    flexDirection: 'column',
    alignItems: 'start',

    borderRight: '1px solid #fff',
    borderLeft: '1px solid #fff',
    backgroundColor: '#000',
    '&:hover': { 
      color: '#000',
      backgroundColor: '#fff',
      transition: '1s linear'
    },
    [theme.breakpoints.down('sm')]: { 
      width: '50%',
      height: '50vh',
      borderBottom: '1px solid #fff',
      '&:last-child': { 
        width: '100%',
      }
    },
    [theme.breakpoints.down('xs')]: { 
      width: '100%',
    }
  },
  title: { 
    fontSize: '2rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.3rem',
      padding: '0',
    },
  },
  num: { 
    fontSize: '3.5rem',
    fontWeight: 'bold',
    
    marginTop: '5rem',
    [theme.breakpoints.down('xs')]: {
      fontSize: '2rem',
    },

  },
  about: { 
    position: 'absolute',
    bottom: '5%',

    fontSize: '.7rem'
    
  }
}));

const menuItems = [
  {
    listText: 'Home',
    listPath: '/',
    listNum: '1',
    listAbout: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut suscipit illum asperiores eveniet, autem inventore itaque vitae aliquid, animi ut fuga ipsa impedit iusto quae alias eum corporis iste quisquam.'
  },
  {
    listText: 'Resume',
    listPath: '/resume',
    listNum: '2',
    listAbout: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut suscipit illum asperiores eveniet, autem inventore itaque vitae aliquid, animi ut fuga ipsa impedit iusto quae alias eum corporis iste quisquam.'
  },
  {
    listText: 'Portfolio',
    listNum: '3',
    listAbout: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut suscipit illum asperiores eveniet, autem inventore itaque vitae aliquid, animi ut fuga ipsa impedit iusto quae alias eum corporis iste quisquam.'
  },
  {
    listText: 'Contacts',
    listPath: '/contacts',
    listNum: '4',
    listAbout: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut suscipit illum asperiores eveniet, autem inventore itaque vitae aliquid, animi ut fuga ipsa impedit iusto quae alias eum corporis iste quisquam.'
  },
  {
    listText: 'About',
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

  const sideList = slider => (
    <Grid item xs={9} sm={10}  className={classes.menuSliderContainer} component="div">
      <List style={{padding: '0'}}>
        {menuItems.map((lsitem, key) => (
          <ListItem className={classes.listItem}  button key={key} component={Link} to={lsitem.listPath}>
            <Typography className={classes.num}>{lsitem.listNum}</Typography>
            <Typography className={classes.title}>{lsitem.listText}</Typography>
            <Typography className={classes.about}>{lsitem.listAbout}</Typography>
          </ListItem>
        ))}
      </List>
    </Grid>
  )
  return (
    <>
      <Box component='nav'>
        <AppBar position='static' style={{ background: '#222' }}>
          <Toolbar>
            <IconButton onClick={toggleSlider('right', true)}>
              <MenuIcon className={classes.burgerIcon} />
            </IconButton >
            <Typography>
              Home Page
            </Typography>
            <SideBar className={change} anchor='top' open={state.right} onClick={toggleSlider('right', false)}>
              <IconButton className={classes.closeIcon}  onClick={toggleSlider('right', false)}>
                <Close />
              </IconButton>
              {sideList('right')}
            </SideBar>
          </Toolbar>
        </AppBar>

      </Box>
    </>
  )
}

export default Header;
