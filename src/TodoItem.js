import React from 'react'

export default function TodoItem({ item, checkTodo, }) {
	function checkThisTodo(){
		checkTodo(item.key);
	}
	
	return (
		<li>
			<label>
				<input type="checkbox" checked={item.done} onChange={checkThisTodo} />
				&nbsp;
				{item.name}
			</label>
		</li>
	)
}
