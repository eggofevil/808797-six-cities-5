import React from 'react';
import PropTypes from 'prop-types';
import '../../../node_modules/leaflet/dist/leaflet.css';
import leaflet from 'leaflet';
import {connect} from 'react-redux';

const mapStateToProps = (state) => ({cityCoords: [state.city.location.latitude, state.city.location.longitude], zoom: state.city.location.zoom});

class CityMap extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  _changeMapView() {
    const {offers, cityCoords, zoom} = this.props;
    this.icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });
    this.activeIcon = leaflet.icon({
      iconUrl: `img/pin-active.svg`,
      iconSize: [30, 30]
    });
    this.map.setView(cityCoords, zoom);
    offers.map((offer) => {
      leaflet.marker(offer.main.coords, {icon: this.icon}).addTo(this.map);
    });
  }

  componentDidMount() {
    this.map = leaflet.map(`map`, {
      zoomControl: false,
      marker: true
    });
    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this.map);
    this._changeMapView();
  }

  componentDidUpdate() {
    this._changeMapView();
  }

  render() {
    return (
      <section id="map" className={`${this.props.parent}__map map`} />
    );
  }
}

CityMap.propTypes = {
  cityCoords: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  offers: PropTypes.array.isRequired,
  parent: PropTypes.string.isRequired,
  zoom: PropTypes.number.isRequired
};

export {CityMap};
export default connect(mapStateToProps)(CityMap);
