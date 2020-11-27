import React from 'react';
import PropTypes from 'prop-types';

import OfferCard from '../offer-card/offer-card';

import offerPropTypes from '../../mocks/offer-prop-types';

const OffersList = ({offersListClassName, offerCardArticleClassName, offerCardDivClassName, cityOffers, selectedOfferId}) => {
  cityOffers = selectedOfferId ? cityOffers.filter((offer) => (offer.id !== selectedOfferId)) : cityOffers;
  return (
    <div className={`places__list ` + offersListClassName}>
      {cityOffers.map((offer, i) => (
        <OfferCard
          offerCardArticleClassName={offerCardArticleClassName}
          offerCardDivClassName={offerCardDivClassName}
          key={`offer-${i}`}
          offer={offer}
        />
      ))}
    </div>
  );
};

OffersList.propTypes = {
  offersListClassName: PropTypes.string.isRequired,
  offerCardArticleClassName: PropTypes.string.isRequired,
  offerCardDivClassName: PropTypes.string.isRequired,
  cityOffers: PropTypes.arrayOf(offerPropTypes.isRequired).isRequired,
  selectedOfferId: PropTypes.number
};

export default OffersList;
