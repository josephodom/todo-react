import React from 'react'

export default function TodoItem({ item, }) {
	return (
		<li>
			<label>
				<input type="checkbox" />
				&nbsp;
				{item.name}
			</label>
		</li>
	)
}
