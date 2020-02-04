import React from 'react'

export default function TodoForm() {
	return (
		<div className="d-flex">
			<input type="text" className="form-control mr-2" placeholder="To Do Item" />
			
			<button className="btn btn-primary" type="button">
				Add
			</button>
		</div>
	)
}
