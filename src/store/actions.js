import {getCityOffers, getCityCoords, sortCityOffers} from './data-operations';

const changeCity = (city) => {
  return {
    type: `CHANGE_CITY`,
    city,
    getCityCoords: getCityCoords(city),
    getCityOffers: getCityOffers(city)
  };
};

const changeSortingType = (sortingType, currentOffers) => {
  return {
    type: `CHANGE_SORTING_TYPE`,
    sortingType,
    sortCityOffers: sortCityOffers(sortingType, currentOffers)
  };
};

export {
  changeCity,
  changeSortingType
};
