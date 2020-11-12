import initialState from './initial-state';

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case `CHANGE_CITY`:
    return action.act(state);
  default:
    return state;
  }
};

export default reducer;
