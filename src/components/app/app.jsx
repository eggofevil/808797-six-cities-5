import React from 'react';
import Main from '../main/main';
import PropTypes from 'prop-types';

const App = ({offersCount}) => <Main offersCount={offersCount} />;

App.propTypes = {
  offersCount: PropTypes.number.isRequired
};
export default App;
