/*
 * action types
 */

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const DELETE_TODO = 'DELETE_TODO';
/*
 * other constants
 */

export const VisibilityFilters = {
	SHOW_ALL: 'SHOW_ALL',
	SHOW_COMPLETED: 'SHOW_COMPLETED',
	SHOW_ACTIVE: 'SHOW_ACTIVE'
};

/*
 * action creators
 */

export function addTodo(text) {
	return { type: ADD_TODO, text }
}

export function toggleTodo(id) {
	return { type: TOGGLE_TODO, id }
}
export function deleteTodo(id) {
	return { type: DELETE_TODO, id }
}

export function setVisibilityFilter(filter) {
	return { type: SET_VISIBILITY_FILTER, filter }
}