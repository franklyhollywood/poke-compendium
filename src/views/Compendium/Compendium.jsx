import { useState, useEffect } from 'react';
import PokemonList from '../../components/PokemonList/PokemonList.jsx';
import { getPokemon } from '../../services/pokemon.js';

export default function Compendium() {
	const [loading, setLoading] = useState(true);
	const [pokemonList, setPokemonList] = useState(['pokemon name']);

	useEffect(() => {
		async function getPokemonList() {
			const fetchedPokemon = await getPokemon();
			setPokemonList(fetchedPokemon);
			console.log(fetchedPokemon);
		}
		getPokemonList();
	}, []);

	return (
		<div>
			<PokemonList pokemonList={pokemonList} />
		</div>
	);
}
