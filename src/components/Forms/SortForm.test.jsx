import { screen, render } from '@testing-library/react';
import SortForm from './SortForm.jsx';

it('testing my filter', () => {
	render(<SortForm />);
	const dropdown = screen.getAllByLabelText('sort');
	expect(dropdown).toMatchSnapshot();
});
