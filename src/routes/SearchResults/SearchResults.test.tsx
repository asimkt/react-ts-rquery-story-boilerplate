import { render, screen } from '@testing-library/react';
import { SearchResults } from '.';

test('renders search anywhere in the component', () => {
  render(<SearchResults />);
  const linkElement = screen.getByText(/search/i);
  expect(linkElement).toBeInTheDocument();
});
