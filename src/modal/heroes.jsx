import React from 'react';
import { Box, Typography, Button } from '@material-ui/core';
import css from './heroes.module.css';

const Heroes = props => {
  return (
    <Box style={props} className={css.modal}>
      <Typography className={css.title}>Fun fact</Typography>
      <Typography className={css.text}>
        At my free time i'm playing computer games. One of my favourite calls Heroes
        of Might and Magic 3. Check out my custom resume😄
      </Typography>
      <Button
        href="/img/hota_resume.jpg"
        download="heroes_resume"
        className={css.btn}
      >
        Download
      </Button>
    </Box>
  );
};

export default Heroes;
