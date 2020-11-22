import offers from '../mocks/offers';
import cities from '../mocks/cities';
import reviews from '../mocks/reviews';
import {SortingTypes} from '../const';
import {getCityOffers, getCityCoords} from './data-operations';

let city = offers[0].city;
let cityCoords = getCityCoords(city);
let cityOffers = getCityOffers(city);
let sortingType = SortingTypes.POPULARITY;

const initialState = {
  cities,
  city,
  cityCoords,
  sortingType,
  cityOffers,
  reviews
};

export default initialState;
