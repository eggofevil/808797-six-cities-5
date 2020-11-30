import React from 'react';
import PropTypes from 'prop-types';
import '../../../node_modules/leaflet/dist/leaflet.css';

class CityMap extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.onCityMapMount();
  }

  render() {
    return (
      <section id="map" className={`${this.props.mapClassName}__map map`} />
    );
  }
}

CityMap.propTypes = {
  onCityMapMount: PropTypes.func.isRequired,
  mapClassName: PropTypes.string.isRequired
};

export default CityMap;
