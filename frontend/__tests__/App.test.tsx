// __tests__/App.test.ts
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HomePage from '../src/pages/HomePage';

describe('App', () => {
  test('renders header text', () => {
    render(<HomePage />);
    const headingElement = screen.getByText('ts-react-boilerplate');
    expect(headingElement).toBeInTheDocument();
  });
});
