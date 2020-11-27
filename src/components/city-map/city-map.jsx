import React from 'react';
import PropTypes from 'prop-types';
import '../../../node_modules/leaflet/dist/leaflet.css';
import leaflet from 'leaflet';
import {connect} from 'react-redux';

import offerPropTypes from '../../mocks/offer-prop-types';

class CityMap extends React.PureComponent {
  constructor(props) {
    super(props);
    this.inactivePin = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 40]
    });
    this.activePin = leaflet.icon({
      iconUrl: `img/pin-active.svg`,
      iconSize: [30, 40]
    });
  }

  _setMapView() {
    const {cityCoords, cityZoom, selectedOffer} = this.props;
    const coords = selectedOffer ? [selectedOffer.location.latitude, selectedOffer.location.longitude] : cityCoords;
    const zoom = selectedOffer ? [selectedOffer.location.zoom] : cityZoom;
    this.map.setView(coords, zoom);
  }

  _setMapIcons() {
    const {cityOffers, activeOfferId, selectedOffer} = this.props;
    const selectedOfferId = selectedOffer ? selectedOffer.id : null;
    cityOffers.map((offer) => {
      const icon = (offer.id === activeOfferId || offer.id === selectedOfferId) ? this.activePin : this.inactivePin;
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
      <section id="map" className={`${this.props.mapClassName}__map map`} />
    );
  }
}

CityMap.propTypes = {
  selectedOffer: offerPropTypes,
  activeOfferId: PropTypes.number,
  cityCoords: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  cityOffers: PropTypes.arrayOf(offerPropTypes.isRequired).isRequired,
  mapClassName: PropTypes.string.isRequired,
  cityZoom: PropTypes.number.isRequired
};

const mapStateToProps = (state) => ({
  activeOfferId: state.activeOffer,
  cityCoords: [state.city.location.latitude, state.city.location.longitude],
  cityZoom: state.city.location.zoom
});

export {CityMap};
export default connect(mapStateToProps)(CityMap);
