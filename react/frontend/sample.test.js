import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import App from './src/App';

describe('App', () => {
  beforeEach(() => {
    // Mock the fetch API
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve([
          {
            id: 1,
            name: 'Phone 1',
            details: {
              processor: 'Processor 1'
            },
            manufacturer: 'Manufacturer 1'
          },
          {
            id: 2,
            name: 'Phone 2',
            details: {
              processor: 'Processor 2'
            },
            manufacturer: 'Manufacturer 2'
          }
        ])
      })
    );
  });

   it('renders the phone data list', async () => {
    render(<App />);

    await waitFor(() => {
      expect(screen.getByText('Phone List')).toBeInTheDocument;
    });

    expect(screen.getByText('Phone 1')).toBeInTheDocument;
    expect(screen.getByText('Phone 2')).toBeInTheDocument;
   
  });


 
});
