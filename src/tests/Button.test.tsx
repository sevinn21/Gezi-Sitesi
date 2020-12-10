import React from 'react'
import {render, screen} from '@testing-library/react'
import Button from '../components/Button/Button'
import userEvent from '@testing-library/user-event' //sanal fonksiyon işlemini tetiklicek

describe('Button', () => { 
   test('trigers onClick', () => {
     const mockFn = jest.fn();
    const {getByRole}  = render(<Button text="BUTTON" onShowDetail={mockFn} />);
    const button = getByRole('button') as HTMLButtonElement;
    userEvent.click(button);
    expect(mockFn).toHaveBeenCalledTimes(1); 
   });

   test('button props', () => {
      const title =  'Test Title';
      render(<Button text="BUTTON" title={title} />);
     expect(screen.findAllByAltText(title));
    });
});