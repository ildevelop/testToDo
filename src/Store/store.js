import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const initialState = {
	agenda: 0,
	allAgendas: [],
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_AGENDA':
			return {
				...state, agenda: state.agenda + 1,
				allAgendas: [...state.allAgendas, {
					'id': state.agenda,
					'title': action.payload,
					'status': 'TODOS'
				}]
			};
		case 'SET_INPROCESS':
			let taskNew = {
				'id': action.payload.id,
				'title': action.payload.title,
				'status': 'INPROCESS'
			};
			let arrD = state.allAgendas;
			let allAgendasNew = arrD.filter(e => e.id !== action.payload.id);
			allAgendasNew.push(taskNew)
			return{...state, allAgendas: allAgendasNew};
		case 'SET_DONE':
			let taskDone = {
				'id': action.payload.id,
				'title': action.payload.title,
				'status': 'DONE'
			};
			let allAgendasDone = state.allAgendas;
			let allAgendasDoneNew = allAgendasDone.filter(e => e.id !== action.payload.id);
			allAgendasDoneNew.push(taskDone)
			return{...state, allAgendas: allAgendasDoneNew};
		case 'DELETE_AGENDA':
			let allAgendasDelete = state.allAgendas;
			let allAgendasDeleteNew = allAgendasDelete.filter(e => e.id !== action.payload.id);
			return{...state, allAgendas: allAgendasDeleteNew};

		default:
			return state;
	}
};

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
export default store