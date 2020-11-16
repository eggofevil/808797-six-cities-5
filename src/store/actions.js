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
const setOffer = (offer, offerRating, offerReviews) => {
  return {
    type: `SET_OFFER`,
    setOffer: offer,
    setOfferRating: offerRating,
    setOfferReviews: offerReviews
  };
};

const resetOffer = () => {
  return {
    type: `RESET_OFFER`,
  };
};

export {
  changeCity,
  setOffer,
  resetOffer
};
