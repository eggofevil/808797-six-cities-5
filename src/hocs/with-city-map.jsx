import React from 'react';
import leaflet from 'leaflet';
import PropTypes from 'prop-types';

import offerPropTypes from '../mocks/offer-prop-types';

function withCityMap(CityMap) {
  return class WithCityMap extends React.PureComponent {
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
      this._onCityMapMount = this._onCityMapMount.bind(this);
    }

    _setMapView() {
      const {location} = this.props;
      const coords = [location.latitude, location.longitude];
      const zoom = location.zoom;
      this.state.map.setView(coords, zoom);
    }

    _setMapIcons() {
      const {cityOffers, selectedOfferId = null, activeOfferId = null} = this.props;
      cityOffers.map((offer) => {
        const icon = (offer.id === activeOfferId || offer.id === selectedOfferId) ? this.state.activePin : this.state.inactivePin;
        leaflet.marker([offer.location.latitude, offer.location.longitude], {icon}).addTo(this.state.map);
      });
    }

    _onCityMapMount() {
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
      WithCityMap.propTypes = {
        location: PropTypes.shape({
          latitude: PropTypes.number.isRequired,
          longitude: PropTypes.number.isRequired,
          zoom: PropTypes.number.isRequired
        }).isRequired,
        cityOffers: PropTypes.arrayOf(offerPropTypes.isRequired).isRequired,
        selectedOfferId: PropTypes.number.isRequired,
        activeOfferId: PropTypes.number.isRequired,
        mapClassName: PropTypes.string.isRequired
      };
      return <CityMap map={this.state.map} onCityMapMount={this._onCityMapMount} mapClassName={this.props.mapClassName} />;
    }
  };
}

export default withCityMap;
