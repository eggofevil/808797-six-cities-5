import React from 'react';
import PropTypes from 'prop-types';
import OfferCard from '../offer-card/offer-card';

import offerPropTypes from '../../mocks/offer-prop-types';
import reviewPropTypes from '../../mocks/review-prop-types';

const OffersList = ({offers, reviews, parent, thisOfferId}) => {
  offers = thisOfferId ? offers.filter((offer) => (offer.id !== thisOfferId)) : offers;
  const getOfferReviews = (offerId) => reviews.filter((review) => review.id === offerId);
  return (
    <React.Fragment>
      {offers.map((offer, i) => (
        <OfferCard
          key={`offer-${i}`}
          parent={parent}
          offer={offer}
          offerReviews={getOfferReviews(offer.id)}
        />
      ))}
    </React.Fragment>
  );
};

OffersList.propTypes = {
  thisOfferId: PropTypes.number,
  parent: PropTypes.string.isRequired,
  reviews: PropTypes.arrayOf(reviewPropTypes).isRequired,
  offers: PropTypes.arrayOf(offerPropTypes).isRequired,
};

export default OffersList;
