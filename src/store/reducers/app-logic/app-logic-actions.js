import {SortingTypes} from '../../../const';

const sortOffersBySomeValue = (currentOffers, valueKey, direction) => {
  switch (direction) {
  case `ascending`:
    return currentOffers.sort((offerA, offerB) => {
      if (offerA[valueKey] > offerB[valueKey]) {
        return 1;
      }
      if (offerA[valueKey] < offerB[valueKey]) {
        return -1;
      }
      return 0;
    });
  case `descending`:
    return currentOffers.sort((offerA, offerB) => {
      if (offerA[valueKey] > offerB[valueKey]) {
        return -1;
      }
      if (offerA[valueKey] < offerB[valueKey]) {
        return 1;
      }
      return 0;
    });
  default:
    return currentOffers;
  }
};

export const sortCityOffers = (sortingType, currentOffers) => {
  switch (sortingType) {
  case SortingTypes.PRICE_HIGH_TO_LOW:
    return sortOffersBySomeValue(currentOffers, `price`, `descending`);
  case SortingTypes.PRICE_LOW_TO_HIGH:
    return sortOffersBySomeValue(currentOffers, `price`, `ascending`);
  case SortingTypes.RATING:
    return sortOffersBySomeValue(currentOffers, `rating`, `descending`);
  case SortingTypes.POPULARITY:
  default:
    return currentOffers;
  }
};

export const changeSortingType = (sortingType) => {
  return {
    type: `CHANGE_SORTING_TYPE`,
    sortingType,
  };
};

export const changeActiveCard = (offerId = null) => {
  return {
    type: `CHANGE_ACTIVE_CARD`,
    activeCard: offerId
  };
};
