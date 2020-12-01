import {extend} from '../../../utils';
import {SortingTypes} from '../../../const';

const sortingType = SortingTypes.POPULARITY;

const initialState = {
  sortingType,
  activeCard: null,
};

const appLogic = (state = initialState, action) => {
  switch (action.type) {
  case `CHANGE_SORTING_TYPE`:
    return extend(state, {
      sortingType: action.sortingType,
    });
  case `CHANGE_ACTIVE_CARD`:
    return extend(state, {
      activeCard: action.activeCard
    });
  default:
    return state;
  }
};

export default appLogic;
