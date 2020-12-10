import React from 'react';
import {render} from '@testing-library/react'
import Citys from '../components/City/Citys'

describe('Citys component test', () => {
  const mockSetState = jest.fn();
  jest.mock('react', () => ({
      ...jest.requireActual('react'),
      useState: initial => [initial, mockSetState]
  }));
  const coll = [{id: 1, name:'Test'}, {id: 2, name:'Test2'}];
  
  test('renders correctly', () => {
      const wrapper = render(<Citys citys={coll}/> );
      setTimeout(() => {
          expect(wrapper).toMatchSnapshot();
          expect(mockSetState).toHaveBeenCalledWith({ id: 1, name: 'Test' });
      }, 100);
  });
}); 