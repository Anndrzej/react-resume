import React, { useState } from 'react';
import { AppBar, Toolbar, ListItem, ListItemIcon, IconButton, ListItemText, Avatar, Divider, List, Typography, Box } from '@material-ui/core';
import { AssignmentInd, Home, Apps, ContactMail, } from '@material-ui/icons';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/styles';
import SideBar from '@material-ui/core/Drawer';
import {Link} from 'react-router-dom';



const useStyle = makeStyles(theme => ({
  menuSliderContainer: {
    width: '100vw',
    height: '100vh'
  },
  avatar: {
    display: 'block',
    margin: 'auto',
    width: '5rem',
    height: '5rem'
  },
  burgerIcon: { 
    color: '#fff',
  }
}));

const menuItems = [
  {
    listIcon: <Home />,
    listText: 'Home',
    listPath: '/'
  },
  {
    listIcon: <AssignmentInd />,
    listText: 'Resume',
    listPath: '/resume'
  },
  {
    listIcon: <Apps />,
    listText: 'Portfolio'
  },
  {
    listIcon: <ContactMail />,
    listText: 'Contacts',
    listPath: '/contacts'
  },
  {
    listText: 'About',
    listPath: '/about'
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
    <Box className={classes.menuSliderContainer} component="div">
      <Avatar className={classes.avatar} src="" alt="" />
      <Divider />
      <List>
        {menuItems.map((lsitem, key) => (
          <ListItem button key={key} component={Link} to={lsitem.listPath}>
            <ListItemIcon>
              {lsitem.listIcon}
            </ListItemIcon>
            <ListItemText primary={lsitem.listText} />
          </ListItem>
        ))}
      </List>
    </Box>
  )
  return (
    <>
      <Box component='nav'>
        <AppBar position='static' style={{ background: '#222' }}>
          <Toolbar>
            <IconButton onClick={toggleSlider('right', true)}>
              <MenuIcon  className={classes.burgerIcon} />
            </IconButton >
            <Typography>
              Home Page
            </Typography>
            <SideBar onClick={toggleSlider('right', false)} anchor='top' open={state.right} >
              {sideList('right')}
            </SideBar>
          </Toolbar>
        </AppBar>

      </Box>
    </>
  )
}

export default Header;
