import { screen, render } from '@testing-library/react';
import Filter from './Filter';

it('testing my filter', () => {
	const types = ['fire', 'bug', 'water'];
	render(<Filter types={types} />);
	const dropdown = screen.getAllByLabelText('dropdown');
	expect(dropdown).toMatchSnapshot();
});
