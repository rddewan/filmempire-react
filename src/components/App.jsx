import React from 'react';
import { CssBaseline } from '@mui/material';

// React Router version 5
// import { Route, Switch } from 'react-router-dom';

// React Router version 6
import { Route, Routes } from 'react-router-dom';

import { Actors, MovieInformation, Movies, NavBar, Profile } from '.';

import useStyles from './styles';

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      {/* show navbar in all the route */}
      <NavBar />
      {/* main part of our app */}
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {/* switch route and only 1 route is visiable at a time */}
        <Routes>
          <Route exact path="/" element={<Movies />} />
          <Route exact path="/movie/:id" element={<MovieInformation />} />
          <Route exact path="/actors/:id" element={<Actors />} />
          <Route exact path="/profile/:id" element={<Profile />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
