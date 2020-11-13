import offers from '../mocks/offers';

/*
const changeCity = (cityName) => {
  return {
    type: `CHANGE_CITY`,
    act: cityName
  };
};

const getOffers = (cityName) => {
  return {
    type: `GET_OFFERS`,
    act: {offers: offers.filter((offer) => offer.city === cityName)}
  };
};
*/

const changeCity = (cityName) => {
  return {
    type: `CHANGE_CITY`,
    changeCity: cityName,
    getOffers: offers.filter((offer) => offer.city === cityName)
  };
};

export {
  changeCity
  // getOffers
};
