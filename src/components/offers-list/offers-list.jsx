import React from 'react';
import PropTypes from 'prop-types';
import OfferCard from '../offer-card/offer-card';

import offerPropTypes from '../../mocks/offer-prop-types';
import reviewPropTypes from '../../mocks/review-prop-types';

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
  _getOfferReviews(offerId) {
    return (this.props.reviews.filter((review) => review.propertyId === offerId));
  }

  render() {
    let offers = this.props.thisOfferId ? this.props.offers.filter((offer) => (offer.propertyId !== this.props.thisOfferId)) : this.props.offers;
    return (
      <React.Fragment>
        {offers.map((offer, i) => (
          <OfferCard
            key={`offer-${i}`}
            parent={this.props.parent}
            offer={offer}
            cityCoords={this.props.cityCoords}
            onMouseEnter={this._handleMouseEnter}
            onMouseLeave={this._handleMouseLeave}
            offerReviews={this._getOfferReviews(offer.propertyId)}
          />
        ))}
      </React.Fragment>
    );
  }
}

OffersList.propTypes = {
  thisOfferId: PropTypes.number,
  parent: PropTypes.string.isRequired,
  reviews: PropTypes.arrayOf(reviewPropTypes).isRequired,
  offers: PropTypes.arrayOf(offerPropTypes).isRequired,
  cityCoords: PropTypes.arrayOf(PropTypes.number).isRequired
};

export default OffersList;
