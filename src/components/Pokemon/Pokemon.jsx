import React from 'react';

export default function Pokemon({
	pokemon,
	hp,
	ability_1,
	egg_group_1,
	pokebase,
	url_image,
}) {
	return (
		<div aria-label='pokemon' key={pokemon}>
			<p>Name: {pokemon}</p>
			<p>Health Points: {hp}</p>
			<p>Ability: {ability_1}</p>
			<p>Egg Group: {egg_group_1}</p>
			<p>Pokebase: {pokebase}</p>
			<img src={url_image} alt={pokemon} />
		</div>
	);
}
