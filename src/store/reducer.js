import initialState from './initial-state';
import {extend} from '../utils';

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case `CHANGE_CITY`:
    // return extend(state, {city: action.act});
    return extend(state, {
      city: action.changeCity,
      offers: action.getOffers
    });
  default:
    return state;
  }
};

export default reducer;
