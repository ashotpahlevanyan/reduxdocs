import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ onClick, onDelete, completed, text }) => (
	<li
		onClick={onClick}
	  className={ completed ? 'completed' : ''}
	>
		{text}
		<button className="delete" onClick={onDelete}>&#10006;</button>
	</li>
);

Todo.propTypes = {
	onClick: PropTypes.func.isRequired,
	completed: PropTypes.bool.isRequired,
	text: PropTypes.string.isRequired
};

export default Todo;
