import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Main from '../main/main';
import SignIn from '../sign-in/sign-in';
import Favorites from '../favorites/favorites';
import FavoritesEmpty from '../favorites-empty/favorites-empty';
import Room from '../room/room';
import RoomNotLogged from '../room-not-logged/room-not-logged';

import offerPropTypes from '../../mocks/offer-prop-types';
import reviewPropTypes from '../../mocks/review-prop-types';

const App = ({offers, reviews}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={(serviceProps) => (
          <Main serviceProps={serviceProps} offers={offers} reviews={reviews} />
        )}>
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
        <Route exact path="/offer::id" render={(props) => (
          <Room props={props} />
        )}>
        </Route>
        <Route exact path="/offer-not-logged">
          <RoomNotLogged />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offers: PropTypes.arrayOf(offerPropTypes).isRequired,
  reviews: PropTypes.arrayOf(reviewPropTypes).isRequired
};
export default App;
