import React, { useState } from 'react';
import { makeStyles, Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  title: {
    marginTop: '2rem',
    fontSize: '8rem',
    textAlign: 'center',
    margin: '0',
    color: '#2b2c2f',
  },
  box: {
    display: 'block',
    flexDirection: 'inherit',
  },
  btnContent: {
    display: 'flex',
    flexDirection: 'column',
    padding: '0 1rem 0 1rem',

    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    [theme.breakpoints.down('md')]: {
      position: 'inherit',
      flexDirection: 'inherit',
      transform: 'translate(0)',
      justifyContent: 'space-between',
    },
    [theme.breakpoints.down('sm')]: {
      position: 'inherit',
      flexDirection: 'column',
      transform: 'translate(0)',
      justifyContent: 'space-between',
    },
    [theme.breakpoints.down('sm')]: {
      position: 'absolute',
    },
  },
  btn: {
    width: '15rem',
    height: '3.8rem',
    marginTop: '3rem',
    fontSize: '1.5rem',
    textTransform: 'none',
    borderRadius: '5px',
    transition: 'all .3s',
    position: 'relative',
    '&:after': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: -2,
    },
    '&:before': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%',
      height: '0%',
      backgroundColor: '#1e4a55',
      transition: 'all .3s',
      zIndex: -1,
    },
    [theme.breakpoints.down('sm')]: {
      position: 'relative',
      '&:nth-child(1)': {
        right: '20%',
        top: '2rem',
      },
      '&:nth-child(2)': {
        right: '52%',
        bottom: '-26rem',
      },
      '&:nth-child(3)': {
        right: '86%',
        top: '47rem',
      },
    },
    '&:hover': {
      color: '#fff',
      '&:before': {
        height: '100%',
        borderRadius: '2px',
      },
    },
  },
  wrp: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 3rem 0 3rem',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  list: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    [theme.breakpoints.down('sm')]: {
      paddingBottom: '10rem',
    },
  },
  redwrp: {
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    '&:nth-child(1)': {
      left: '82%',
      top: '55%',
    },
    '&:nth-child(2)': {
      right: '70%',
      top: '50%',
    },
    '&:nth-child(3)': {
      right: '78%',
      top: '65%',
    },
    '&:nth-child(4)': {
      left: '77%',
      top: '45%',
    },
    [theme.breakpoints.down('md')]: {
      position: 'inherit',
      '&:nth-child(1), &:nth-child(2), &:nth-child(3), &:nth-child(4)': {
        flexDirection: 'row',
      },
    },
  },
  yellowwrp: {
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    '&:nth-child(1)': {
      right: '67%',
      top: '64%',
    },
    '&:nth-child(2)': {
      left: '86%',
      top: '43%',
    },
    '&:nth-child(3)': {
      left: '74%',
      top: '33%',
    },
    [theme.breakpoints.down('md')]: {
      position: 'inherit',
      '&:nth-child(1), &:nth-child(2), &:nth-child(3)': {
        flexDirection: 'row',
      },
    },
  },
  bluewrp: {
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    '&:nth-child(1)': {
      left: '70%',
      top: '50%',
    },
    '&:nth-child(2)': {
      left: '78%',
      top: '65%',
    },
    '&:nth-child(3)': {
      right: '86%',
      top: '43%',
    },
    '&:nth-child(4)': {
      right: '74%',
      top: '33%',
    },
    '&:nth-child(5)': {
      right: '78%',
      top: '46%',
    },
    [theme.breakpoints.down('md')]: {
      position: 'inherit',
      flexDirection: 'column-reverse',
      '&:nth-child(1), &:nth-child(2), &:nth-child(3), &:nth-child(4), &:nth-child(5)': {
        flexDirection: 'row',
      },
    },
  },
  dot: {
    width: '8px',
    height: '8px',
    backgroundColor: '#9d9c9c',
    borderRadius: '3px',
    transition: 'all 0.2s linear',
  },
  text: {
    fontWeight: 'bold',
    position: 'relative',
    opacity: '0',
    transition: 'all 0.5s linear',
    marginLeft: '1.5rem',

    textAlign: 'center',

    color: 'white',
    [theme.breakpoints.down('md')]: {
      position: 'inherit',
    },
  },
}));

function Skills() {
  const [state, setState] = useState({
    learn: {
      BackgroundColor: '',
    },
    thisSyte: {
      BackgroundColor: '',
    },
    wannaLearn: {
      BackgroundColor: '',
    },
  });

  function handleClick() {
    setState({
      thisSyte: {
        ...state.thisSyte,
        backgroundColor: '#6464c4',
        display: 'flex',
        transform: 'scale(1)',
        width: '15px',
        height: '15px',
      },
      textSyte: {
        display: 'block',
        transform: 'rotate(0deg)',
        opacity: '1',
      },
      blueBtn: {
        backgroundColor: '#6464c4',
        borderBottom: 'none',
      },
    });
  }
  function handleClick2() {
    setState({
      wannaLearn: {
        ...state.wannaLearn,
        backgroundColor: '#f50a0a',
        transform: 'scale(1)',
        width: '15px',
        height: '15px',
      },
      textWannaLearn: {
        display: 'block',
        transform: 'rotate(0deg)',
        opacity: '1',
      },
      redBtn: {
        borderBottom: 'none',
        backgroundColor: '#f50a0a',
      },
    });
  }
  function handleClick3() {
    setState({
      learn: {
        ...state.learn,
        backgroundColor: 'yellow',
        transform: 'scale(1)',
        width: '15px',
        height: '15px',
      },
      textLearn: {
        display: 'block',
        transform: 'rotate(0deg)',
        opacity: '1',
      },
      yellowBtn: {
        borderBottom: 'none',
        backgroundColor: 'yellow',
      },
    });
  }

  const css = useStyles();
  return (
    <div>
      <h1 className={css.title}>Skills</h1>
      <div className={css.box}>
        <div className={css.btnContent}>
          <Button className={css.btn} onClick={handleClick} style={state.blueBtn}>
            this site
          </Button>
          <Button className={css.btn} onClick={handleClick2} style={state.redBtn}>
            wanna learn
          </Button>
          <Button className={css.btn} onClick={handleClick3} style={state.yellowBtn}>
            rocking at
          </Button>
        </div>
        <div className={css.wrp}>
          <ul className={css.list}>
            <li className={css.bluewrp}>
              <span className={css.dot} style={state.thisSyte}></span>
              <p className={css.text} style={state.textSyte}>
                Material UI
              </p>
            </li>
            <li className={css.bluewrp}>
              <span className={css.dot} style={state.thisSyte}></span>
              <p className={css.text} style={state.textSyte}>
                CSS
              </p>
            </li>
            <li className={css.bluewrp}>
              <span className={css.dot} style={state.thisSyte}></span>
              <p className={css.text} style={state.textSyte}>
                React JS
              </p>
            </li>
            <li className={css.bluewrp}>
              <span className={css.dot} style={state.thisSyte}></span>
              <p className={css.text} style={state.textSyte}>
                Parallax
              </p>
            </li>
            <li className={css.bluewrp}>
              <span className={css.dot} style={state.thisSyte}></span>
              <p className={css.text} style={state.textSyte}>
                GSAP
              </p>
            </li>
          </ul>
          <ul className={css.list}>
            <li className={css.redwrp}>
              <span className={css.dot} style={state.wannaLearn}></span>
              <p className={css.text} style={state.textWannaLearn}>
                Saga
              </p>
            </li>
            <li className={css.redwrp}>
              <span className={css.dot} style={state.wannaLearn}></span>
              <p className={css.text} style={state.textWannaLearn}>
                React Native
              </p>
            </li>
            <li className={css.redwrp}>
              <span className={css.dot} style={state.wannaLearn}></span>
              <p className={css.text} style={state.textWannaLearn}>
                Next Js
              </p>
            </li>
            <li className={css.redwrp}>
              <span className={css.dot} style={state.wannaLearn}></span>
              <p className={css.text} style={state.textWannaLearn}>
                TypeScript
              </p>
            </li>
          </ul>
          <ul className={css.list}>
            <li className={css.yellowwrp}>
              <span className={css.dot} style={state.learn}></span>
              <p className={css.text} style={state.textLearn}>
                JavaScript
              </p>
            </li>

            <li className={css.yellowwrp}>
              <span className={css.dot} style={state.learn}></span>
              <p className={css.text} style={state.textLearn}>
                Redux
              </p>
            </li>

            <li className={css.yellowwrp}>
              <span className={css.dot} style={state.learn}></span>
              <p className={css.text} style={state.textLearn}>
                React Js
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;
