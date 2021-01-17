import React, { useState } from 'react';
import { AppBar, Toolbar, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import SideBar from '@material-ui/core/Drawer';
import logo from '../img/my-logo.png';
import Navbar from './navbar/navbar';
import css from './header.module.css'

const useStyle = makeStyles(theme => ({
  
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
  const [state, setState] = useState(false)

  const core = useStyle()

  const close = { 
      first: {

          transform: 'rotate(45deg)',
          marginTop: '-0.4rem',
      },
      disapear: { 
        opacity: 0
      },
      second: { 
        transform: 'rotate(-45deg)',
        marginTop: '-0.4rem',
      }
      
  }

  return (
    <Box component='nav'>
      <AppBar style={{ background: '#222' }}>
        <Toolbar>
          <div className={css.burger}  onClick={() => setState(!state)}>
            <div style={state ? close.first : null} className={css.line}></div>
            <div style={state ? close.disapear : null}  className={css.line}></div>
            <div style={state ? close.second : null}  className={css.line}></div>
          </div>
          <img className={css.logo} src={logo} alt='logo'></img>
          <SideBar anchor='top' open={state} onClick={() => setState(false)}>
            <Navbar />
          </SideBar>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header;
