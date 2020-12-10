import React from 'react';
import { render, screen} from '@testing-library/react'
import  Contact  from '../components/Contact/Contact';
import userEvent from '@testing-library/user-event';

describe('Contact component test', () => {
      test('type', () => {
        render(<Contact />) 
        userEvent.type(screen.getByRole('input'), 'Test,{enter}Value!')
        expect(screen.getByRole('input')).toHaveValue('Test,Value!')
      })
  }); 