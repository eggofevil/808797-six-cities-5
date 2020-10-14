import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Main from '../main/main';
import MainEmpty from '../main-empty/main-empty';
import SignIn from '../sign-in/sign-in';
import Favorites from '../favorites/favorites';
import FavoritesEmpty from '../favorites-empty/favorites-empty';
import Room from '../room/room';
import RoomNotLogged from '../room-not-logged/room-not-logged';

const App = ({offers}, {reviews}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/main-empty">
          <MainEmpty />
        </Route>
        <Route exact path="/login">
          <SignIn />
        </Route>
        <Route exact path="/favorites">
          <Favorites />
        </Route>
        <Route exact path="/favorites-empty">
          <FavoritesEmpty />
        </Route>
        <Route exact path="/offer">
          <Room />
        </Route>
        <Route exact path="/offer-not-logged">
          <RoomNotLogged />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offers: PropTypes.array.isRequired,
  reviews: PropTypes.array.isRequired
};
export default App;
