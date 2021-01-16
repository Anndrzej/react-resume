import React from 'react';
import { Box, Typography, Button } from '@material-ui/core';
import css from './heroes.module.css'


const Heroes = (props) => {
    return (
        <Box style={props.style} className={css.modal}>
            <Typography className={css.title}>Fun fact</Typography>
            <Typography className={css.text}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut maxime pariatur quaerat magni a veniam nisi reiciendis magnam vitae vel.
          </Typography>
            <Button className={css.btn}>Download</Button>
        </Box>
    );
};

export default Heroes;