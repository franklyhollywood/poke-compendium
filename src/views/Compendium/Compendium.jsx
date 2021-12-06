import { useState, useEffect } from 'react';
import Controls from '../../components/Controls/Controls.jsx';
import PokemonList from '../../components/PokemonList/PokemonList.jsx';
import {
	getPokemon,
	fetchTypes,
	fetchPokemonByType,
} from '../../services/pokemon.js';

export default function Compendium() {
	const [loading, setLoading] = useState(true);
	const [pokemonList, setPokemonList] = useState([]);
	const [types, setType] = useState([]);
	const [selectedType, setSelectedType] = useState('');
	const [sortPoke, setSortPoke] = useState('asc');

	useEffect(() => {
		async function getPokemonList() {
			const fetchedPokemon = await getPokemon();
			setPokemonList(fetchedPokemon);
			setLoading(false);
		}
		getPokemonList();
	}, []);

	useEffect(() => {
		async function getTypes() {
			const fetchedTypes = await fetchTypes();
			setType(fetchedTypes);
		}
		getTypes();
	}, []);

	useEffect(() => {
		if (!selectedType) return;

		async function getFilteredPokemon() {
			if (selectedType === 'all') {
				const fetchedPokemon = await getPokemon();
				setPokemonList(fetchedPokemon);
			} else {
				const filteredPokemon = await fetchPokemonByType(
					selectedType,
					sortPoke
				);
				setLoading(false);
				setPokemonList(filteredPokemon);
			}
		}
		getFilteredPokemon();
	}, [selectedType, sortPoke]);

	if (loading) {
		return <h1>You be waiting....</h1>;
	}

	return (
		<div>
			<Controls
				types={types}
				setSelectedType={setSelectedType}
				selectedType={selectedType}
				sortPoke={sortPoke}
				setSortPoke={setSortPoke}
			/>
			<PokemonList pokemonList={pokemonList} />
		</div>
	);
}
