export const setOffers = (offers) => ({
  type: `SET_OFFERS`,
  offers
});

export const setCity = (cityName) => ({
  type: `SET_CITY`,
  cityName
});

export const setSortingType = (sortingType) => ({
  type: `CHANGE_SORTING_TYPE`,
  sortingType
});

export const changeActiveCard = (offerId = null) => ({
  type: `CHANGE_ACTIVE_CARD`,
  activeCard: offerId
});
