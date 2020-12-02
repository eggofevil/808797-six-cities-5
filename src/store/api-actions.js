import {setOffers, setCity, setCityOffers} from './reducers/actions';

export const getOffers = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
    .then(({data}) => {
      const cityName = data[0].city.name;
      dispatch(setOffers(data));
      dispatch(setCity(cityName));
      dispatch(setCityOffers(cityName, data));
    })
);
