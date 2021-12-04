import React from 'react';
import Filter from '../Forms/Filter';
import SortForm from '../Forms/SortForm';

export default function Controls({
	types,
	setSelectedType,
	selectedType,
	sortPokemon,
	setSortPokemon,
}) {
	return (
		<div>
			<Filter
				types={types}
				setSelectedType={setSelectedType}
				selectedType={selectedType}
			/>
			<SortForm sortPokemon={sortPokemon} setSortPokemon={setSortPokemon} />
		</div>
	);
}
