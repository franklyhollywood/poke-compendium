import React from 'react';

export default function Form({ types, setSelectedType, selectedType }) {
	return (
		<div>
			<select
				aria-label='dropdown'
				value={selectedType}
				onChange={(e) => setSelectedType(e.target.value)}
			>
				<option value='all'>All</option>
				{types.map((type) => (
					<option key={type} value={type}>
						{type}
					</option>
				))}
			</select>
		</div>
	);
}
