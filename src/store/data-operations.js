import offers from '../mocks/offers';
import {SortingTypes} from '../const';

const getCityData = (city) => {
  const offerByCity = offers.find((offer) => offer.city.name === city);
  const cityData = offerByCity ? offerByCity.city : {name: city};
  return cityData;
};

const getCityOffers = (city) => offers.filter((offer) => offer.city.name === city);

const sortCityOffers = (sortingType, currentOffers) => {
  switch (sortingType) {
  case SortingTypes.PRICE_HIGH_TO_LOW:
    return sortOffersBySomeValue(currentOffers, `price`, `descending`);
  case SortingTypes.PRICE_LOW_TO_HIGH:
    return sortOffersBySomeValue(currentOffers, `price`, `ascending`);
  case SortingTypes.RATING:
    return sortOffersBySomeValue(currentOffers, `rating`, `descending`);
  case SortingTypes.POPULARITY:
  default:
    return getCityOffers(currentOffers[0].city.name);
  }
};

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

export {
  getCityData,
  getCityOffers,
  sortCityOffers
};
