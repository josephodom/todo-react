import React from 'react'

export default function TodoItem({ item, }) {
	return (
		<li>
			<label>
				<input type="checkbox" checked={item.done} />
				&nbsp;
				{item.name}
				
				<code>{item.key}</code>
			</label>
		</li>
	)
}
