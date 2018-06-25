import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

const TodoList = ({ todos, onTodoClick, onTodoDelete }) => (
	<ul className="todoList">
		{todos.map((todo, index) => (
			<Todo
				key={index}
				{...todo}
				onClick={() => onTodoClick(index)}
				onDelete={(e) => {onTodoDelete(index); e.stopPropagation();}}
			/>
		))}
	</ul>
);

TodoList.propTypes = {
	todos: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			completed: PropTypes.bool.isRequired,
			text: PropTypes.string.isRequired
		}).isRequired
	).isRequired,
	onTodoClick: PropTypes.func.isRequired,
	onTodoDelete: PropTypes.func.isRequired
};

export default TodoList;

