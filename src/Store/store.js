import {createStore , applyMiddleware } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import {Map} from "immutable";
import thunk from 'redux-thunk'

const initialState = Map({
  agenda: 0,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_AGENDA':
      return state.update('agenda',agenda => agenda +1);
    default:
      return state;
  }
};

const store = createStore(reducer , composeWithDevTools(applyMiddleware(thunk)));
export default store