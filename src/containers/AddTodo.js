import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

let AddTodo = ({dispatch}) => {
	let input;

	return (
		<div>
			<form
				onSubmit={e => {
					e.preventDefault();
					if(!input.value.trim()) {
						return;
					}

					dispatch(addTodo(input.value.trim()));
					input.value = '';
					input.focus();
				}}
			>
				<input className="todoInput"
					ref={node => {
						input = node;
					}}
				/>

				<button type="submit" className="addTodo">
					Add Todo
				</button>
			</form>
		</div>
	)
};

AddTodo = connect()(AddTodo);

export default AddTodo;
