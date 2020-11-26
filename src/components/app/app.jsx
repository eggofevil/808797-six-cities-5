import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import PropTypes from 'prop-types';
import Main from '../main/main';
import SignIn from '../sign-in/sign-in';
import Favorites from '../favorites/favorites';
import Room from '../room/room';

import TestComponent from '../test-component/test-component';

const App = ({cities}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main cities={cities} />
        </Route>
        <Route exact path="/login">
          <SignIn />
        </Route>
        <Route exact path="/favorites">
          <Favorites />
        </Route>
        <Route exact path="/offer:id" render={(serviceProps) => (<Room state={serviceProps.location.state} />)} />
        <Route exact path="/test" component={TestComponent} />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default App;
