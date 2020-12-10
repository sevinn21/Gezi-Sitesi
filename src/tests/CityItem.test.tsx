import React from 'react';
import {render,screen} from '@testing-library/react'
import CityItem from '../components/City/CityItem';
import { CardContent } from '../styles/City.styles';

describe("CityItem props", () => {
  test('renders name', () => {
    const name = 'Bursa';
    render(
      <CityItem>
        <CardContent >{name}</CardContent>
      </CityItem>
    ) 
  expect(screen.findAllByAltText(name));
  });
});
