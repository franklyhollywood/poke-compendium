import { screen, render } from '@testing-library/react';
import Compendium from './Compendium';

it('test sort', () => {
	render(<Compendium />);
	const isLoading = screen.getByText('You be waiting....');
	expect(isLoading).toBeInTheDocument();
});
