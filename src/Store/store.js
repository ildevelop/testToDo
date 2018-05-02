import {createStore , applyMiddleware } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const initialState ={
  agenda: 0,
  allAgendas:[],
  filterAgenda:''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_AGENDA':
	    console.log('action.payload',action.payload);
	    return {...state,agenda:state.agenda +1,allAgendas:[...state.allAgendas,{'id':state.agenda, 'title':action.payload}]};
    case 'FIND_AGENDA':
      return {...state,filterAgenda:action.payload}
	    default:
      return state;
  }
};

const store = createStore(reducer , composeWithDevTools(applyMiddleware(thunk)));
export default store