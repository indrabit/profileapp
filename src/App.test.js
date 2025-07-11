import { render, screen } from '@testing-library/react';
import App from './App';

test('renders profile name', () => {
  render(<App />);
  const nameElement = screen.getByText(/Indra Shrestha/i);
  expect(nameElement).toBeInTheDocument();
});

test('renders job title', () => {
  render(<App />);
  const jobElement = screen.getByText(/Full Stack Developer/i);
  expect(jobElement).toBeInTheDocument();
});

test('renders introduction section', () => {
  render(<App />);
  const introElement = screen.getByText(/Introduction/i);
  expect(introElement).toBeInTheDocument();
});