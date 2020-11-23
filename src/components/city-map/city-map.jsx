import React from 'react';
import PropTypes from 'prop-types';
import '../../../node_modules/leaflet/dist/leaflet.css';
import leaflet from 'leaflet';
import {connect} from 'react-redux';

const mapStateToProps = (state) => ({
  activeOffer: state.activeOffer,
  cityCoords: [state.city.location.latitude, state.city.location.longitude],
  zoom: state.city.location.zoom
});

class CityMap extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  _setMapView() {
    const {cityCoords, zoom} = this.props;
    this.map.setView(cityCoords, zoom);
  }

  _setMapIcons() {
    const {offers, activeOffer} = this.props;
    this.icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });
    this.activeIcon = leaflet.icon({
      iconUrl: `img/pin-active.svg`,
      iconSize: [30, 30]
    });
    offers.map((offer) => {
      const icon = offer.id === activeOffer ? this.activeIcon : this.icon;
      leaflet.marker([offer.location.latitude, offer.location.longitude], {icon}).addTo(this.map);
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
    this._setMapView();
    this._setMapIcons();
  }

  componentDidUpdate() {
    this._setMapView();
    this._setMapIcons();
  }

  render() {
    return (
      <section id="map" className={`${this.props.parent}__map map`} />
    );
  }
}

CityMap.propTypes = {
  activeOffer: PropTypes.number,
  cityCoords: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  offers: PropTypes.array.isRequired,
  parent: PropTypes.string.isRequired,
  zoom: PropTypes.number.isRequired
};

export {CityMap};
export default connect(mapStateToProps)(CityMap);
