import React from 'react'
import {render, screen} from '@testing-library/react'
import HomePage from '../components/HomePage/HomePage';

describe('HomePage' , () => {
  test('render h1 element', () => {
    render(<HomePage />);
    expect(screen.getByText('Hoşgeldin')).toBeInTheDocument();
  });
})