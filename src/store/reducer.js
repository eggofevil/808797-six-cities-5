import initialState from './initial-state';
import {extend} from '../utils';

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case `CHANGE_CITY`:
    // return extend(state, {city: action.act});
    return extend(state, {
      city: action.city,
      cityOffers: action.getCityOffers
    });
  case `CHANGE_SORTING_TYPE`:
    return extend(state, {
      sortingType: action.sortingType,
      cityOffers: action.sortCityOffers
    });
  case `CHANGE_ACTIVE_OFFER`:
    return extend(state, {
      activeOffer: action.activeOffer
    });
  default:
    return state;
  }
};

export default reducer;
