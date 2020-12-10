
import React from 'react';
import {render} from '@testing-library/react'
import CityPlaces from '../components/CityPlaces/CityPlaces';

const match = {
  params: {
    cityName:'Bursa'
  }, 
  isExact: true, 
  path: "", 
  url: ""
};

describe('CityPlaces component test', () => {
    test('data item', () => {
      const {getAllByTestId} =  render(<CityPlaces  match={match}/>);
      const liArr = getAllByTestId('item');
      expect(liArr.length).toBe(1)
    });
  }); 