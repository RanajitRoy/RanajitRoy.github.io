import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders my portfolio', () => {
  render(<App />);
  const linkElement = screen.getByText(/My Portfolio/i);
  expect(linkElement).toBeInTheDocument();
});
