import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

// Reducer!
const count = (state = 0, action) => {
  switch (action.type) {
    case 'INCREASE':
      return state += 1;
    case 'DECREASE':
      return state -= 1;
    default:
      return state;
  }
};

const user = (state = [], action) => {
  console.log('In user reducer. User:', action.payload);
  switch (action.type) {
    case 'NEW_USER':
        return [...state, action.payload];
    default:
        return state;
  }
};

// Store!
const storeInstance = createStore(
  combineReducers({
      count,
      user
  }),
);

// Provider lets redux and react talk to one another
ReactDOM.render(
  <React.StrictMode>
    <Provider store={storeInstance}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


