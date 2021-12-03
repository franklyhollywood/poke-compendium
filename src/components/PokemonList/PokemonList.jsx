import React from 'react';
import Pokemon from '../Pokemon/Pokemon.jsx';

export default function PokemonList({ pokemonList }) {
	return (
		<div>
			{/* <Pokemon /> */}
			{pokemonList.map(
				({ pokemon, _id, hp, ability_1, egg_group_1, pokebase, url_image }) => (
					<Pokemon
						pokemon={pokemon}
						hp={hp}
						ability_1={ability_1}
						egg_group_1={egg_group_1}
						pokebase={pokebase}
						url_image={url_image}
					/>
				)
			)}
		</div>
	);
}
