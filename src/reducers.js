import { combineReducers } from 'redux';
import {
	ADD_TODO,
	TOGGLE_TODO,
	DELETE_TODO,
	SET_VISIBILITY_FILTER,
	VisibilityFilters
} from './actions';

const { SHOW_ALL } = VisibilityFilters;

function visibilityFilter(state = SHOW_ALL, action) {
	switch (action.type) {
		case SET_VISIBILITY_FILTER:
			return action.filter;
		default:
			return state;
	}
}

function todos(state = [], action) {
	switch (action.type) {
		case ADD_TODO:
			return [
				...state,
				{
					text: action.text,
					completed: false,
					id: Date.now()
				}
			];
		case TOGGLE_TODO:
			return state.map((todo) => {
				if (todo.id === action.id) {
					return Object.assign({}, todo, {
						completed: !todo.completed
					})
				}
				return todo;
			});
		case DELETE_TODO:
			let newState = [...state];
			let item = newState.filter(todo => todo.id === action.id)[0];
			let index = newState.indexOf(item);
			newState.splice(index, 1);
			return newState;
		default:
			return state;
	}
}

const todoApp = combineReducers({
	visibilityFilter,
	todos
});

export default todoApp;