import React from 'react';
import PropTypes from 'prop-types';
import '../../../node_modules/leaflet/dist/leaflet.css';
import leaflet from 'leaflet';

class CityMap extends React.PureComponent {
  constructor(props) {
    super(props);
    this.zoom = 12;
  }

  componentDidMount() {
    const {offers, cityCoords} = this.props;
    this.icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });
    this.map = leaflet.map(`map`, {
      zoomControl: false,
      marker: true
    });
    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this.map);
    this.map.setView(cityCoords, 12);
    offers.map((offer) => {
      leaflet.marker(offer.main.coords, {icon: this.icon}).addTo(this.map);
    });
  }

  componentDidUpdate() {
    const {offers, cityCoords} = this.props;
    this.map.setView(cityCoords, 12);
    offers.map((offer) => {
      leaflet.marker(offer.main.coords, {icon: this.icon}).addTo(this.map);
    });
  }

  render() {
    return (
      <section id="map" className={`${this.props.location}__map map`} />
    );
  }
}

CityMap.propTypes = {
  cityCoords: PropTypes.arrayOf(PropTypes.number).isRequired,
  offers: PropTypes.array.isRequired,
  location: PropTypes.string.isRequired
};

export default CityMap;
