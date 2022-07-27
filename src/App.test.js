import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);