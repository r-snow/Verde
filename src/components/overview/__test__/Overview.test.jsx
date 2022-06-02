/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from '../Header/Header';

describe('Header component', () => {
  test('Render header text', () => {
    render(<Header />);
    expect(screen.getByText('Verde')).toBeInTheDocument();
  });
});
