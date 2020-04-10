import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react';
import App from './App';

it('renders without crashing', () => {
  render(<App />);
});

test('Header is visible', () => {
  const {getByText} = render(<App/>)

  const header = getByText(/Players In The Women's World Cup/i)

  expect(header).toBeVisible();
});