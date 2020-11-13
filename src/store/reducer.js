import initialState from './initial-state';
import {extend} from '../utils';

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case `CHANGE_CITY`:
    // return action.act(state);
    return extend(state, {city: action.act});
  default:
    return state;
  }
};

export default reducer;
