import {extand} from '../utils';
import offers from '../mocks/offers';

const changeCity = {
  type: `CHANGE_CITY`,
  act: (state, city) => extand(state, {city})
};

const getOffers = {
  type: `GET_OFFERS`,
  act: (state, city) => extand(state, {offers: offers.filter((offer) => offer.city === city)})
};

export {
  changeCity,
  getOffers
};
