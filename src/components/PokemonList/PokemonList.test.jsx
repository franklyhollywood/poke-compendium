import { screen, render } from '@testing-library/react';
import PokemonList from './PokemonList.jsx';

it('testing my lists', () => {
	const fakePokes = [
		{
			pokemon: 'pikachu',
			hp: '60',
			ability_1: 'compound-eyes',
			egg_group_1: 'bug',
			pokebase: 'butterfree',
		},
		{
			pokemon: 'venusaur-mega',
			hp: '80',
			ability_1: 'compound-eyesthick-fat',
			egg_group_1: 'monster',
			pokebase: 'venusaur',
		},
	];
	render(<PokemonList pokemonList={fakePokes} />);
	const pokelist = screen.getByLabelText('list');
	expect(pokelist).toMatchSnapshot();
});
