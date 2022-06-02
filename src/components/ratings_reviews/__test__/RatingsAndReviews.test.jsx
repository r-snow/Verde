import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import RatingsAndReviews from '../RatingsAndReviews';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

it('renders without crashing', () => {
  const section = document.createElement('div');
  render(<RatingsAndReviews />, section);
});

test('renders header', () => {
  render(<RatingsAndReviews />);
  expect(
    screen.getByText('% OF REVIEWS RECOMMEND THIS PRODUCT!')
  ).toBeInTheDocument();
});

// import { render } from '@testing-library/react';
