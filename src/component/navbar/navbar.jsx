import React from 'react';
import { Grid, List, ListItem, Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import s from '.././header.module.css'

const useStyle = makeStyles(theme => ({

  menuSliderContainer: {
    width: '100vw',
    height: '100vh',
    margin: '0 auto',
  },
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

}))

const menuItems = [
  {
    id: 1,
    listText: 'Home',
    listName: 'Home Page',
    listPath: '/',
    listNum: '1',
    listAbout: 'Greetings!'
  },
  {
    id: 2,
    listText: 'Resume',
    listName: 'Resume Page',
    listPath: '/resume',
    listNum: '2',
    listAbout: 'This page about my working career.'
  },
  {
    id: 3,
    listText: 'Skills',
    listName: 'Skills Page',
    listPath: '/skills',
    listNum: '3',
    listAbout: 'This page about the bunch of technologies which im currently working with or i wanna learn.'
  },
  {
    id: 4,
    listText: 'Contacts',
    listName: 'Contacts Page',
    listPath: '/contacts',
    listNum: '4',
    listAbout: 'On this page u can contact with me and ask me any question.'
  },
  {
    id: 5,
    listText: 'About',
    listName: 'About Page',
    listPath: '/about',
    listNum: '5',
    listAbout: 'On this page u will found some general information about me.'
  }

]

const Navbar = () => {

  const css = useStyle()
  return (
      <Grid item xs={9} sm={10} className={css.menuSliderContainer} component="div">
        <List style={{ padding: '0' }}>
          {menuItems.map((lsitem, key) => (
            <ListItem className={s.listItem} key={key} component={Link} to={lsitem.listPath}>
              <Typography className={css.num}>{lsitem.listNum}</Typography>
              <Typography className={css.title}>{lsitem.listText}</Typography>
              <Typography className={css.about}>{lsitem.listAbout}</Typography>
            </ListItem>
          ))}
        </List>
      </Grid>
  );
};

export default Navbar;