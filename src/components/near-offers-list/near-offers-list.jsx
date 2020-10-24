import React from 'react';
import PropTypes from 'prop-types';
import OfferCard from '../offer-card/offer-card';

import offerPropTypes from '../../mocks/offer-prop-types';
import reviewPropTypes from '../../mocks/review-prop-types';

const NearOffersList = ({offers, reviews, city}) => {
  let nearOffers = offers.filter((offer) => (offer.city === city));
  const getOfferReviews = (offerId) => (reviews.filter((review) => review.propertyId === offerId));

  return (
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">Other places in the neighbourhood</h2>
        <div className="near-places__list places__list">
          {nearOffers.map((offer, i) => (<OfferCard key={`offer-${i}`} offer={offer} offerReviews={getOfferReviews(offer.propertyId)}/>))}
        </div>
      </section>
    </div>
  );
};

NearOffersList.propTypes = {
  city: PropTypes.string.isRequired,
  reviews: PropTypes.arrayOf(reviewPropTypes).isRequired,
  offers: PropTypes.arrayOf(offerPropTypes).isRequired
};

export default NearOffersList;
