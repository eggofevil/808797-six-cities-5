import offers from '../mocks/offers';
import cities from '../mocks/cities';
import reviews from '../mocks/reviews';
import {SortingTypes} from '../const';

let city = offers[0].city;
let cityCoords = cities.filter((entry) => entry[city])[0][city];
let cityOffers = offers.filter((offer) => (offer.city === offers[0].city));
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
