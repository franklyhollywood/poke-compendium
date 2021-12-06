import React from 'react';
import Filter from '../Forms/Filter';
import SortForm from '../Forms/SortForm';

export default function Controls({
	types,
	setSelectedType,
	selectedType,
	sortPoke,
	setSortPoke,
}) {
	return (
		<div>
			<Filter
				types={types}
				setSelectedType={setSelectedType}
				selectedType={selectedType}
			/>
			<SortForm sortPokemon={sortPoke} setSortPoke={setSortPoke} />
		</div>
	);
}
