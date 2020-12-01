import {extend} from '../../../utils';

import reviews from '../../../mocks/reviews';
import {getCityData, getCityOffers} from './app-data-actions';

const city = getCityData();

const initialState = {
  city,
  cityOffers: getCityOffers(),
  reviews
};

const appData = (state = initialState, action) => {
  switch (action.type) {
  case `CHANGE_CITY`:
    return extend(state, {
      city: action.city,
      cityOffers: action.getCityOffers
    });
  default:
    return state;
  }
};

export default appData;
