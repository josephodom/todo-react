import React from 'react'

export default function TodoForm() {
	return (
		<div class="d-flex">
			<input type="text" class="form-control mr-2" placeholder="To Do Item" />
			
			<button class="btn btn-primary" type="button">
				Add
			</button>
		</div>
	)
}
