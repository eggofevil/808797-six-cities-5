import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';
import '../../../node_modules/leaflet/dist/leaflet.css';

import offerPropTypes from '../../mocks/offer-prop-types';

class CityMap extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      map: null,
      inactivePin: leaflet.icon({
        iconUrl: `img/pin.svg`,
        iconSize: [30, 40]
      }),
      activePin: leaflet.icon({
        iconUrl: `img/pin-active.svg`,
        iconSize: [30, 40]
      })
    };
  }

  _setMapView() {
    const {location} = this.props;
    const coords = [location.latitude, location.longitude];
    const zoom = location.zoom;
    this.state.map.setView(coords, zoom);
  }

  _setMapIcons() {
    const {cityOffers, selectedOfferId, activeCard} = this.props;
    cityOffers.map((offer) => {
      const icon = (offer.id === activeCard || offer.id === selectedOfferId) ? this.state.activePin : this.state.inactivePin;
      leaflet.marker([offer.location.latitude, offer.location.longitude], {icon}).addTo(this.state.map);
    });
  }

  componentDidMount() {
    const map = leaflet.map(`map`, {
      zoomControl: false,
      marker: true
    });
    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(map);
    this.setState({map}, () => {
      this._setMapView();
      this._setMapIcons();
    });
  }

  componentDidUpdate() {
    this._setMapView();
    this._setMapIcons();
  }

  render() {
    return <section id="map" className={`${this.props.mapClassName}__map map`} />;
  }
}

CityMap.propTypes = {
  location: PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
    zoom: PropTypes.number.isRequired
  }).isRequired,
  cityOffers: PropTypes.arrayOf(offerPropTypes.isRequired).isRequired,
  selectedOfferId: PropTypes.number,
  activeCard: PropTypes.number,
  mapClassName: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({activeCard: state.activeCard});

export {CityMap};
export default connect(mapStateToProps)(CityMap);
