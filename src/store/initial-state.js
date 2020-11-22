import offers from '../mocks/offers';
import cities from '../mocks/cities';
import reviews from '../mocks/reviews';
import {SortingTypes} from '../const';
import {getCityOffers, getCityCoords} from './data-operations';

const city = offers[0].city.name;
// const cityCoords = [offers[0].city.location.latitude, offers[0].city.location.longitude];
const cityCoords = getCityCoords(city);
const cityOffers = getCityOffers(city);
const sortingType = SortingTypes.POPULARITY;

const initialState = {
  cities,
  city,
  cityCoords,
  sortingType,
  cityOffers,
  reviews
};

export default initialState;
