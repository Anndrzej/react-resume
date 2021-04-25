import React from 'react';
import { Grid, List, ListItem, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import s from '.././header.module.css';
import { menuItems } from '../../../helpers/components/navbar/navbar'

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
}));

const Navbar = () => {
  const css = useStyle();
  return (
    <Grid item xs={9} sm={10} className={css.menuSliderContainer} component="div">
      <List style={{ padding: '0' }}>
        {menuItems.map((lsitem, key) => (
          <ListItem
            className={s.listItem}
            key={key}
            component={Link}
            to={lsitem.listPath}
          >
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
