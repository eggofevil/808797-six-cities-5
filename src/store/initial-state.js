import offers from '../mocks/offers';
import cities from '../mocks/cities';
import reviews from '../mocks/reviews';

let city = offers[0].city;
let cityCoords = cities.filter((entry) => entry[city])[0][city];
let cityOffers = offers.filter((offer) => (offer.city === offers[0].city));

const initialState = {
  cities,
  city,
  cityCoords,
  cityOffers,
  offer: null,
  offerRating: null,
  offerReviews: null,
  reviews
};

export default initialState;
