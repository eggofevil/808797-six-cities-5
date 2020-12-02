import {filterCityOffers} from './sub-actions';

export const setOffers = (offers) => ({
  type: `SET_OFFERS`,
  offers
});

export const setCity = (cityName) => ({
  type: `SET_CITY`,
  cityName
});

export const setCityOffers = (cityName, offers) => ({
  type: `SET_CITY_OFFERS`,
  cityOffers: filterCityOffers(cityName, offers)
});
