export function addAgenda(name) {
	return (dispatch) => dispatch({
		type: 'ADD_AGENDA',
		payload: name
	})
}

export function hendleInProcess(name) {
	return (dispatch) => dispatch({
		type: 'SET_INPROCESS',
		payload: name
	})
}

export function hendleDone(name) {
	return (dispatch) => dispatch({
		type: 'SET_DONE',
		payload: name
	})
}

export function hendleDelete(name) {
	return (dispatch) => dispatch({
		type: 'DELETE_AGENDA',
		payload: name
	})
}