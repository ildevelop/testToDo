import * as actionTypes from './../Store/constant';

export function addAgenda(name) {
	return (dispatch) => dispatch({
		type: actionTypes.ADD_AGENDA,
		payload: name
	})
}

export function hendleInProcess(name) {
	return (dispatch) => dispatch({
		type: actionTypes.SET_INPROCESS,
		payload: name
	})
}

export function hendleDone(name) {
	return (dispatch) => dispatch({
		type: actionTypes.SET_DONE,
		payload: name
	})
}

export function hendleDelete(name) {
	return (dispatch) => dispatch({
		type: actionTypes.DELETE_AGENDA,
		payload: name
	})
}