import {getCityOffers, getCityData} from './data-operations';

const changeCity = (city) => {
  return {
    type: `CHANGE_CITY`,
    city: getCityData(city),
    getCityOffers: getCityOffers(city)
  };
};
const changeSortingType = (sortingType) => {
  return {
    type: `CHANGE_SORTING_TYPE`,
    sortingType,
  };
};

const changeActiveCard = (offerId = null) => {
  return {
    type: `CHANGE_ACTIVE_CARD`,
    activeCard: offerId
  };
};

export {
  changeCity,
  changeSortingType,
  changeActiveCard
};
