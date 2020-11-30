import React from 'react';
import PropTypes from 'prop-types';

import {sortCityOffers} from '../store/data-operations';

import offerPropTypes from '../mocks/offer-prop-types';

function withOffersList(Component) {
  const WithOffersList = ({cityOffers, sortingType}) => {
    const sortedOffers = sortCityOffers(sortingType, cityOffers);
    return <Component
      offersListClassName="cities__places-list tabs__content"
      offerCardArticleClassName="cities__place-card"
      offerCardDivClassName="cities__image-wrapper"
      cityOffers={sortedOffers}
    />;
  };
  WithOffersList.propTypes = {
    cityOffers: PropTypes.arrayOf(offerPropTypes.isRequired).isRequired,
    sortingType: PropTypes.string.isRequired
  };
  return WithOffersList;
}

export default withOffersList;
