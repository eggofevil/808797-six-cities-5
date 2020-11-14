import offers from '../mocks/offers';
import cities from '../mocks/cities';

const changeCity = (city) => {
  return {
    type: `CHANGE_CITY`,
    changeCity: city,
    getCityCoords: cities.filter((entry) => entry[city])[0][city],
    getCityOffers: offers.filter((offer) => offer.city === city)
  };
};

export {
  changeCity
};
