import offers from '../mocks/offers';

const initialState = {
  city: offers[0],
  offers: offers.filter((offer) => (offer.city === offers[0].city))
};

export default initialState;
