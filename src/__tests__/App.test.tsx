import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

describe('App', () => {
  test('renders hello world text', () => {
    render(<App />);
    const headingElement = screen.getByText('Hello from React!');
    expect(headingElement).toBeInTheDocument();
  });
});
