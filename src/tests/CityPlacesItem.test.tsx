import React from 'react';
import { render,} from '@testing-library/react'
import CityPlacesItem from '../components/CityPlaces/CityPlacesItem';

const item = [
    {
      detail: 'Test1',
      place:'Botanik park',
      image : 'image1'
    }
  ];

describe('CityPlaceItem', () => {
    it('how many values', () => {
        const {getAllByTestId} = render(<CityPlacesItem item={item} />);
        const elem = getAllByTestId('item');
        expect(elem).toHaveLength(1);
      })
  });