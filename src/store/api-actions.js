import {setOffers, setCity} from './reducers/actions';

export const getOffers = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
    .then(({data}) => {
      const cityName = data[0].city.name;
      dispatch(setCity(cityName));
      dispatch(setOffers(data));
    })
);
