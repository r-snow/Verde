/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AddAQuestion from '../QnA_Components/AddAQuestion';

describe('AddAQuestion component', () => {
  test('render h2 element', () => {
    render(<AddAQuestion />);
    expect(
      screen.getByText('New Question About: product #')
    ).toBeInTheDocument();
  });
});
