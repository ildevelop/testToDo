import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import {Provider} from 'react-redux';
import {createStore} from 'redux'
import {Map} from 'immutable'
import registerServiceWorker from './registerServiceWorker';

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_AGENDA':
      return state.update('agenda',agenda => agenda +1);
    default:
      return state;
  }
};
const initialState = Map({
  agenda: 0,
});
const store = createStore(reducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
