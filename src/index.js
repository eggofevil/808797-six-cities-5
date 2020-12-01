import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './store/reducers/root-reducer';
import App from './components/app/app';

import {cities} from './const';

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f);

ReactDOM.render(
  <Provider store={store}>
    <App cities={cities} />
  </Provider>,
  document.getElementById(`root`)
);
