import offers from '../../../mocks/offers';

export const getCityData = (city) => {
  if (city) {
    const offerByCity = offers.find((offer) => offer.city.name === city);
    return offerByCity ? offerByCity.city : {name: city};
  }
  return offers[0] ? offers[0].city : {name: `Amsterdam`};
};

export const getCityOffers = (city = offers[0].city.name) => offers.filter((offer) => offer.city.name === city);

export const changeCity = (city) => {
  return {
    type: `CHANGE_CITY`,
    city: getCityData(city),
    getCityOffers: getCityOffers(city)
  };
};
