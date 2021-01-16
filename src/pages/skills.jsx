import React, { useState } from 'react';
import { makeStyles, Button } from '@material-ui/core';



const useStyles = makeStyles(theme => ({
    title: {
        fontSize: '8rem',
        textAlign: 'center',
        margin: '0',
        color: '#2b2c2f',
    },
    btnContent: {
        display: 'flex',
        flexDirection: 'column',

        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
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
        '&:hover': {
            color: '#fff',
            '&:before': {
                height: '100%',
                borderRadius: '2px',
            }
        },


    },
    item: {
        position: 'absolute',
        display: 'block',
        width: '8px',
        height: '8px',
        backgroundColor: '#9d9c9c',
        borderRadius: '3px',
        transition: 'all 0.4s linear',

        '&:nth-child(1)': {
            right: '70%',
            top: '50%',
        },
        '&:nth-child(2)': {
            right: '78%',
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
        '&:nth-child(6)': {
            right: '67%',
            top: '64%',
        },
        '&:nth-child(7)': {
            left: '86%',
            top: '43%',
        },
        '&:nth-child(8)': {
            left: '74%',
            top: '33%',
        },
        '&:nth-child(9)': {
            left: '77%',
            top: '45%',
        },
        '&:nth-child(10)': {
            left: '82%',
            top: '55%',
        },
        '&:nth-child(11)': {
            left: '70%',
            top: '50%',
        },
        '&:nth-child(12)': {
            left: '78%',
            top: '65%',
        },
    },
    text: {
        fontWeight: 'bold',
        position: 'absolute',
        opacity: '0',
        transition: 'all 0.5s linear',

        textAlign: 'center',

        color: 'white'
    }
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
            BackgroundColor: ''
        }
    })

    function handleClick() {
        setState({
            thisSyte: {
                ...state.thisSyte,
                backgroundColor: '#6464c4',
                display: 'block',
                transform: 'scale(1)',
                width: '15px',
                height: '15px',
            },
            textSyte: {
                display: 'block',
                transform: 'rotate(0deg)',
                opacity: '1'
            },
            blueBtn: {
                backgroundColor: '#6464c4',
                borderBottom: 'none',
            }
        })
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
                opacity: '1'
            },
            redBtn: {
                borderBottom: 'none',
                backgroundColor: '#f50a0a'
            }
        })
    }
    function handleClick3() {
        setState({
            learn: {
                ...state.learn,
                backgroundColor: 'yellow',
                transform: 'scale(1)',
                width: '15px',
                height: '15px'
            },
            textLearn: {
                display: 'block',
                transform: 'rotate(0deg)',
                opacity: '1'
            },
            yellowBtn: {
                borderBottom: 'none',
                backgroundColor: 'yellow'
            }
        })
    }


    const css = useStyles()
    return (
            <div>
                <h1 className={css.title}>Skills</h1>
                <div className={css.btnContent}>
                    <Button className={css.btn} onClick={handleClick} style={state.blueBtn}>this site</Button>
                    <Button className={css.btn} onClick={handleClick2} style={state.redBtn}>wanna learn</Button>
                    <Button className={css.btn} onClick={handleClick3} style={state.yellowBtn}>rocking at</Button>
                </div>
                <ul className={css.list}>
                    <li className={css.item} style={state.thisSyte}>
                        <p className={css.text} style={state.textSyte}>Material UI</p>
                    </li>
                    <li className={css.item} style={state.wannaLearn}>
                        <p className={css.text} style={state.textWannaLearn}>Saga</p>
                    </li>
                    <li className={css.item} style={state.thisSyte}>
                        <p className={css.text} style={state.textSyte}>CSS</p>
                    </li>
                    <li className={css.item} style={state.learn}>
                        <p className={css.text} style={state.textLearn}>JavaScript</p>
                    </li>
                    <li className={css.item} style={state.wannaLearn}>
                        <p className={css.text} style={state.textWannaLearn}>Next Js</p>
                    </li>
                    <li className={css.item} style={state.learn}>
                        <p className={css.text} style={state.textLearn}>Redux</p>
                    </li>
                    <li className={css.item} style={state.thisSyte}>
                        <p className={css.text} style={state.textSyte}>React JS</p>
                    </li>
                    <li className={css.item} style={state.thisSyte}>
                        <p className={css.text} style={state.textSyte}>Parallax</p>
                    </li>
                    <li className={css.item} style={state.wannaLearn}>
                        <p className={css.text} style={state.textWannaLearn}>TypeScript</p>
                    </li>
                    <li className={css.item} style={state.learn}>
                        <p className={css.text} style={state.textLearn}>React Js</p>
                    </li>
                    <li className={css.item} style={state.thisSyte}>
                        <p className={css.text} style={state.textSyte}>GSAP</p>
                    </li>
                    <li className={css.item} style={state.wannaLearn}>
                        <p className={css.text} style={state.textWannaLearn}>React Native</p>
                    </li>
                </ul>
            </div>
    );
};

export default Skills;