import offers from '../mocks/offers';
import cities from '../mocks/cities';

let city = offers[0].city;
let cityCoords = cities.filter((entry) => entry[city])[0][city];
let cityOffers = offers.filter((offer) => (offer.city === offers[0].city));

const initialState = {
  city,
  cityCoords,
  cityOffers
};

export default initialState;
