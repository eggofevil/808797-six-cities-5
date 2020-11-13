import React from 'react';
import PropTypes from 'prop-types';
import '../../../node_modules/leaflet/dist/leaflet.css';
import leaflet from 'leaflet';

import {AMSTERDAM_INITIAL_COORDS} from '../../const';

class CityMap extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const city = AMSTERDAM_INITIAL_COORDS;
    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });
    const zoom = 12;
    const map = leaflet.map(`map`, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });
    map.setView(city, zoom);
    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(map);
    this.props.offers.map((offer) => {
      leaflet.marker(offer.main.coords, {icon}).addTo(map);
    });
  }

  render() {
    return (
      <section id="map" className={`${this.props.location}__map map`} />
    );
  }
}

CityMap.propTypes = {
  offers: PropTypes.array.isRequired,
  location: PropTypes.string.isRequired
};

export default CityMap;