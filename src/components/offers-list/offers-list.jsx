import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import OfferCard from '../offer-card/offer-card';

import offerPropTypes from '../../mocks/offer-prop-types';
import reviewPropTypes from '../../mocks/review-prop-types';

const mapStateToProps = (state) => ({offer: state.offer, cityOffers: state.cityOffers, reviews: state.reviews});

const OffersList = ({offer, cityOffers, parent, reviews}) => {
  const getOfferReviews = (offerId) => {
    return (reviews.filter((review) => review.propertyId === offerId));
  };
  cityOffers = offer ? cityOffers.filter((entry) => (entry !== offer)) : cityOffers;

  return (
    <React.Fragment>
      {cityOffers.map((entry, i) => (
        <OfferCard
          key={`offer-${i}`}
          parent={parent}
          offer={entry}
          offerReviews={getOfferReviews(entry.id)}
        />
      ))}
    </React.Fragment>
  );
};

OffersList.propTypes = {
  thisOfferId: PropTypes.number,
  parent: PropTypes.string.isRequired,
  reviews: PropTypes.arrayOf(reviewPropTypes).isRequired,
  cityOffers: PropTypes.arrayOf(offerPropTypes).isRequired
};

export {OffersList};
export default connect(mapStateToProps)(OffersList);
