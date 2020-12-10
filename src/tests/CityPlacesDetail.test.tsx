import React from 'react';
import {render} from '@testing-library/react'
import CityPlacesDetail from '../components/CityPlaces/CityPlacesDetail';
import { getCityPlaces } from '../services/CityPlacesApi';

jest.mock("../services/CityPlacesApi");
 
const match = {
  params: {
    placeName:'Gölyazı'
  }, 
  isExact: true, 
  path: "", 
  url: ""}
 
  const posts = [
    { id: 1, place: "place1", detail: "detail1",image:"image1" },
    { id: 2, place: "place2", detail: "detail2",image:"image2" },
  ]; 
  getCityPlaces.mockResolvedValueOnce(posts);
describe('CityPlacesDetail', () => {
  test('check if condition',  async () => {
      const {getAllByText} = render(<CityPlacesDetail match={match}></CityPlacesDetail>);
      posts.map((item) =>
        match.params.placeName == item.place ? 
        expect(getAllByText(item.place)).toBeInTheDocument() : null
      );
    })

    test('how many values',  async () => {
      render(<CityPlacesDetail match={match}></CityPlacesDetail>);
      expect(getCityPlaces).toHaveBeenCalledTimes(1);
      expect(getCityPlaces).toHaveBeenCalledWith();
    })
});
  