import React from 'react';
import PropTypes from 'prop-types';
import OfferCard from '../offer-card/offer-card';

class OffersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeCard: null
    };
    this._handleMouseEnter = this._handleMouseEnter.bind(this);
    this._handleMouseLeave = this._handleMouseLeave.bind(this);
  }

  _handleMouseEnter(offerProperty) {
    this.setState({activeCard: offerProperty});
  }
  _handleMouseLeave() {
    this.setState({activeCard: null});
  }

  render() {
    return (
      <div className="cities__places-list places__list tabs__content">
        {this.props.offers.map((offer, i) => (
          <OfferCard key={`offer-${i}`} offer={offer} onMouseEnter={this._handleMouseEnter} onMouseLeave={this._handleMouseLeave}/>
        ))}
      </div>
    );
  }
}

OffersList.propTypes = {
  offers: PropTypes.array.isRequired
};

export default OffersList;
