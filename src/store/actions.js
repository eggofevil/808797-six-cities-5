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

const changeActiveOffer = (offerId = null) => {
  return {
    type: `CHANGE_ACTIVE_OFFER`,
    activeOffer: offerId
  };
};

export {
  changeCity,
  changeSortingType,
  changeActiveOffer
};
