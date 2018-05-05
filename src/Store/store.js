import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import * as actionTypes from './constant';

const initialState = {
	countAgendas:0,
	agenda: 0,
	allAgendas: [],
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.GET_DATA:
			console.log('GET_DATA',action.mockApiData);
			return action.mockApiData
		case actionTypes.ADD_AGENDA:
			return {
				...state, agenda: state.agenda + 1,
				countAgendas:state.allAgendas.length +1,
				allAgendas: [...state.allAgendas, {
					'id': state.agenda,
					'title': action.payload,
					'status': 'TODOS'
				}]
			};
		case actionTypes.SET_INPROCESS:
			let taskNew = {
				'id': action.payload.id,
				'title': action.payload.title,
				'status': 'INPROCESS'
			};
			let arrD = state.allAgendas;
			let allAgendasNew = arrD.filter(e => e.id !== action.payload.id);
			allAgendasNew.push(taskNew)
			return{...state, allAgendas: allAgendasNew};
		case actionTypes.SET_DONE:
			let taskDone = {
				'id': action.payload.id,
				'title': action.payload.title,
				'status': 'DONE'
			};
			let allAgendasDone = state.allAgendas;
			let allAgendasDoneNew = allAgendasDone.filter(e => e.id !== action.payload.id);
			allAgendasDoneNew.push(taskDone)
			return{...state, allAgendas: allAgendasDoneNew};
		case actionTypes.DELETE_AGENDA:
			let allAgendasDelete = state.allAgendas;
			let allAgendasDeleteNew = allAgendasDelete.filter(e => e.id !== action.payload.id);
			return{...state, allAgendas: allAgendasDeleteNew,countAgendas:state.allAgendas.length -1};

		default:
			return state;
	}
};

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
export default store