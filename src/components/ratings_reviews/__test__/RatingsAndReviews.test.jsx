import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen, cleanup } from '@testing-library/react';
import RatingsAndReviews from '../RatingsAndReviews';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

it('renders without crashing', () => {
  const section = document.createElement('div');
  ReactDOM.render(<RatingsAndReviews />, section);
});

test('renders header', () => {
  render(<RatingsAndReviews />);
  const header = screen.getByText('Reviews & Ratings');
  expect(header).toBeInTheDocument();
});

// import { render } from '@testing-library/react';
