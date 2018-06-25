import React from 'react';
import FilterLink from '../containers/FilterLink';
import { connect } from 'react-redux';

const Footer = (state) => (
	<p className="footer">
		<label>Show:</label>
		{' '}
		<FilterLink filter="SHOW_ALL">
			All ({state.todos.length})
		</FilterLink>
		{', '}
		<FilterLink filter="SHOW_ACTIVE">
			Active ({state.todos.filter(t => !t.completed).length})
		</FilterLink>
		{', '}
		<FilterLink filter="SHOW_COMPLETED">
			Completed ({state.todos.filter(t => t.completed).length})
		</FilterLink>
	</p>
);

const mapStateToProps = state => {
	return {
		todos: [...state.todos]
	}
};

export default connect(mapStateToProps)(Footer);

