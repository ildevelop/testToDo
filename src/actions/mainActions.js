export function addAgenda(name) {
	return (dispatch) => dispatch({
		type: 'ADD_AGENDA',
		payload: name
	})
}

export function findAgenda(name) {
	return (dispatch) => dispatch({
		type: 'FIND_AGENDA',
		payload: name
	})
}