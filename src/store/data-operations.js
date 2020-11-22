// import cities from '../mocks/cities';
import offers from '../mocks/offers';
import {SortingTypes} from '../const';

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
    return getCityOffers(currentOffers[0].city);
  }
};
/*
const sortCityOffers = (sortingType, currentOffers) => {
  switch (sortingType) {
  case SortingTypes.PRICE_HIGH_TO_LOW:
    return currentOffers.sort((offerA, offerB) => {
      if (offerA.main.price > offerB.main.price) {
        return -1;
      }
      if (offerA.main.price < offerB.main.price) {
        return 1;
      }
      return 0;
    });
  case SortingTypes.PRICE_LOW_TO_HIGH:
    return currentOffers.sort((offerA, offerB) => {
      if (offerA.main.price > offerB.main.price) {
        return 1;
      }
      if (offerA.main.price < offerB.main.price) {
        return -1;
      }
      return 0;
    });
  case SortingTypes.RATING:
  case SortingTypes.POPULARITY:
  default:
    return getCityOffers(currentOffers[0].city);
  }
};
*/
// const getCityCoords = (city) => cities.filter((entry) => entry[city])[0][city];
/*
const getCityCoords = (city) => {
  const cityData = cities.filter((entry) => entry[city])[0];
  const cityCoords = cityData[city];
  return cityCoords;
};
*/
const getCityCoords = (city) => {
  const cityLocation = offers.find((offer) => offer.city.name === city).city.location;
  // const cityData = cities.find((element) => Object.keys(element)[0] === city);
  return [cityLocation.latitude, cityLocation.longitude];
};
const getCityOffers = (city) => offers.filter((offer) => offer.city.name === city);

export {
  getCityOffers,
  sortCityOffers,
  getCityCoords
};
