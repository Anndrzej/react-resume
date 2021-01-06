import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';



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
        marginTop: '3rem',
        fontSize: '3rem',
        backgroundColor: 'transparent',
        border: 'none',
    },
    item: { 
        position: 'absolute',
        display: 'block',
        width: '8px',
        height: '8px',
        backgroundColor: '#9d9c9c',
        borderRadius: '3px',

        '&:nth-child(1)': { 
            right: '70%',
            top: '50%',
            transform: 'rotate(45deg)'
        },
        '&:nth-child(2)': { 
            right: '78%',
            top: '65%',
            transform: 'rotate(15deg)'
        },
        '&:nth-child(3)': { 
            right: '86%',
            top: '43%',
            transform: 'rotate(66deg)'
        },
        '&:nth-child(4)': { 
            right: '74%',
            top: '33%',
            transform: 'rotate(75deg)'
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
            transform: 'rotate(15deg)'
        },
        '&:nth-child(8)': { 
            left: '74%',
            top: '33%',
            transform: 'rotate(66deg)'
        },
        '&:nth-child(9)': { 
            left: '77%',
            top: '45%',
            transform: 'rotate(75deg)'
        },
        '&:nth-child(10)': { 
            left: '82%',
            top: '55%',
            transform: 'rotate(45deg)'
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
        display: 'none',

        fontWeight: 'bold',
        transition: 'all 0.1s linear',
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
                backgroundColor: 'blue',
                display: 'block',
                transform: 'scale(1)',
                transition: 'all 0.4s linear',
                width: '15px',
                height: '15px',
            },
            textSyte: { 
                display: 'block',
                transform: 'rotate(0deg)'
            }
        })
    }
    function handleClick2() {
        setState({
            wannaLearn: {
                ...state.wannaLearn,
                backgroundColor: 'red',
                transform: 'scale(1)',
                transition: 'all 0.4s linear',
                width: '15px',
                height: '15px',
            },
            textWannaLearn: { 
                display: 'block',
                transform: 'rotate(0deg)'
            }
        })
    }
    function handleClick3() {
        setState({
            learn: {
                ...state.learn,
                backgroundColor: 'orange',
                transform: 'scale(1)',
                transition: 'all 0.4s linear',
                width: '15px',
                height: '15px'
            },
            textLearn: { 
                display: 'block',
                transition: 'all 0.1s linear',
            }
        })
    }


    const css = useStyles()
    return (
        <div>
            <h1 className={css.title}>Skills</h1>
            <div className={css.btnContent}>
                <button className={css.btn} onClick={handleClick}>this site</button>
                <button className={css.btn} onClick={handleClick2}>wanna learn</button>
                <button className={css.btn} onClick={handleClick3}>rocking at</button>
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