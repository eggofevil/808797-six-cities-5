import React from 'react';
import PropTypes from 'prop-types';
import '../../../node_modules/leaflet/dist/leaflet.css';

const Map = ({location}) => {
  return (
    <section className={`${location}__map map`} />
  );
};

Map.propTypes = {
  location: PropTypes.string.isRequired
};

export default Map;
