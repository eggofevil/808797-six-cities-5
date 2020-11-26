import offers from '../mocks/offers';
import reviews from '../mocks/reviews';
import {SortingTypes} from '../const';
import {getCityOffers} from './data-operations';

const city = offers[0].city;
const cityOffers = getCityOffers(city.name);
const sortingType = SortingTypes.POPULARITY;

const initialState = {
  city,
  sortingType,
  cityOffers,
  activeOffer: null,
  reviews
};

export default initialState;
