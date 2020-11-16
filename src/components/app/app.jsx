import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Main from '../main/main';
import SignIn from '../sign-in/sign-in';
import Favorites from '../favorites/favorites';
import Room from '../room/room';

import TestComponent from '../test-component/test-component';

import reviewPropTypes from '../../mocks/review-prop-types';

const App = ({cities, reviews}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main reviews={reviews} cities={cities} />
        </Route>
        <Route exact path="/login">
          <SignIn />
        </Route>
        <Route exact path="/favorites">
          <Favorites />
        </Route>
        <Route exact path="/offer:id" render={(serviceProps) => (<Room reviews={reviews} state={serviceProps.location.state} />)} />
        <Route exact path="/test" component={TestComponent} />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.object).isRequired,
  reviews: PropTypes.arrayOf(reviewPropTypes).isRequired
};
export default App;
