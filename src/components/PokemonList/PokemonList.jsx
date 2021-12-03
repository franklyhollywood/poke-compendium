import React from 'react';
import Pokemon from '../Pokemon/Pokemon.jsx';

export default function PokemonList({ pokemonList }) {
	return (
		<div>
			{/* <Pokemon /> */}
			{pokemonList.map(({ pokemon, _id }) => (
				<Pokemon key={_id} pokemon={pokemon} />
			))}
		</div>
	);
}
