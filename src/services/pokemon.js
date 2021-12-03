export const getPokemon = async () => {
	const fetchedPokemon = await fetch(
		'https://pokedex-alchemy.herokuapp.com/api/pokedex'
	);
	const body = await fetchedPokemon.json();

	return body.results;
};
