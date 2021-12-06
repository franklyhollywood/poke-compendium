import { screen, render } from '@testing-library/react';
import Pokemon from './Pokemon.jsx';

it('sort', () => {
	render(
		<Pokemon
			pokemon='Pikachu'
			hp='23'
			ability_1='compound-eyes'
			egg_group_1='bug'
			pokebase='butterfree'
		/>
	);
	const pokemon = screen.getByLabelText('pokemon');
	expect(pokemon).toMatchSnapshot();
});
