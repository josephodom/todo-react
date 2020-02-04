import React from 'react';
import TodoItem from './TodoItem';

export default function TodoList({ list, checkTodo, }) {
	if(!list || !list.length){
		return (
			<li>No items</li>
		)
	}
	
	return (
		list.map(item => {
			return (
				<TodoItem key={item.name} item={item} checkTodo={checkTodo} />
			)
		})
	)
}
