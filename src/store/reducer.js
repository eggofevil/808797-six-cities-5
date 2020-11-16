import initialState from './initial-state';
import {extend} from '../utils';

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case `CHANGE_CITY`:
    // return extend(state, {city: action.act});
    return extend(state, {
      city: action.changeCity,
      cityCoords: action.getCityCoords,
      cityOffers: action.getCityOffers
    });
  case `SET_OFFER`:
    return extend(state, {
      offer: action.setOffer,
      offerRating: action.setOfferRating,
      offerReviews: action.setOfferReviews
    });
  case `RESET_OFFER`:
    return extend(state, {
      offer: null,
      offerRating: null,
      offerReviews: null
    });
  default:
    return state;
  }
};

export default reducer;
