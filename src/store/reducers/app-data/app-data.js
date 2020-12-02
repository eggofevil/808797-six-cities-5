import {extend} from '../../../utils';

import reviews from '../../../mocks/reviews';
// import {getCityData, getCityOffers} from './app-data-actions';

// const city = getCityData();
// const city = `Amsterdam`;

const initialState = {
  offers: [],
  cityName: `Amsterdam`,
  cityOffers: []
  // reviews
};

const appData = (state = initialState, action) => {
  switch (action.type) {
  case `SET_OFFERS`:
    return extend(state, {
      offers: action.offers
    });
  case `SET_CITY`:
    return extend(state, {
      cityName: action.cityName
    });
  case `SET_CITY_OFFERS`:
    return extend(state, {
      cityOffers: action.cityOffers
    });
  default:
    return state;
  }
};

export default appData;
