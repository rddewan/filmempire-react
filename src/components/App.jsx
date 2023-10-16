import React from 'react';
import { Button, CssBaseline } from '@mui/material';
import { Route, Switch } from 'react-router-dom/';

import { Actors, MovieInformation, Movies, NavBar, Profile} from './'


const App = () => (
  <div>
  <CssBaseline />
  {/* show navbar in all the route */}
  <NavBar />
  {/* main part of our app */}
  <main>
  {/* switch route and only 1 route is visiable at a time */}
    <Switch>
      <Route exact path="/">
        <Movies />
      </Route>     
      <Route exact path="/movie/:id">
        <MovieInformation />
      </Route>
      <Route exact path="/actors/:id">
        <Actors />
      </Route>
      <Route exact path="/profile/:id">
        <Profile />
      </Route>
    </Switch>
  </main>
  </div>
);

export default App;
