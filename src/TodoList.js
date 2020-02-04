import React from 'react';
import TodoItem from './TodoItem';

export default function TodoList({ list, }) {
	return (
		list.map(item => {
			return (
				<TodoItem key={item.name} item={item} />
			)
		})
	)
}
