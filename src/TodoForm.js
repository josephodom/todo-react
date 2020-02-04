import React from 'react'

export default function TodoForm({ createTodo, }) {
	return (
		<form onSubmit={createTodo}>
			<div className="d-flex">
				<input type="text" className="form-control mr-2" id="todo-input" placeholder="To Do Item" />
				
				<button className="btn btn-primary" type="submit">
					Add
				</button>
			</div>
		</form>
	)
}
