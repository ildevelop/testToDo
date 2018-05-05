export function addAgenda(name) {
	return (dispatch) => dispatch({
		type: 'ADD_AGENDA',
		payload: name
	})
}

export function hendleInProcess(name) {
	console.log('hendleInProcess',name);
	return (dispatch) => dispatch({
		type: 'SET_INPROCESS',
		payload: name
	})
}
