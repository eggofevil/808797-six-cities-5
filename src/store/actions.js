import {extend} from '../utils';
import offers from '../mocks/offers';

/*
const changeCity = {
  type: `CHANGE_CITY`,
  act: (state, cityName) => extend(state, {city: cityName})
};
*/
const changeCity = (cityName) => {
  return {
    type: `CHANGE_CITY`,
    act: cityName
  };
};

const getOffers = {
  type: `GET_OFFERS`,
  act: (state, city) => extend(state, {offers: offers.filter((offer) => offer.city === city)})
};

export {
  changeCity,
  getOffers
};
