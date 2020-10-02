import React from 'react';
import PropTypes from 'prop-types';

const Main = ({offersCount}) => <p>Hello! I&apos;ve recieved {offersCount} offers</p>;

Main.propTypes = {
  offersCount: PropTypes.number.isRequired
};
export default Main;
