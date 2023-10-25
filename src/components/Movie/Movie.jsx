
import React from 'react';
import { Typography, Grid, Ggrow, Tooltip, Rating } from '@mui/material';
import { Link } from 'react-router-dom';

import useStyles from './styles';

const Movie = ({ movie, i }) => {
  const classes = useStyles();

  return (
    // xs={12} - extra small
    // sm={6} - small
    // md={4} - medium
    // lg={3} - large
    // xl={2} - extra large
    <Grid item xs={12} sm={6} md={4} lg={3} xl={2} className={classes.movie}>
      <Typography className={classes.title} variant="h5">{movie.title}</Typography>
    </Grid>
  );
};

export default Movie;
