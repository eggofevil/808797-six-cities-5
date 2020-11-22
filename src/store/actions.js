import {getCityOffers, getCityData, sortCityOffers} from './data-operations';

const changeCity = (city) => {
  return {
    type: `CHANGE_CITY`,
    city: getCityData(city),
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
