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

  it('renders loading state initially', async () => {
    render(<App />);

    expect(screen.getByText('Loading...')).toBeInTheDocument;

    await waitFor(() => {
      expect(screen.getByText('Phone List')).toBeInTheDocument;
    });
  });

  it('renders the list after data is fetched', async () => {
    render(<App />);

    await waitFor(() => {
      expect(screen.getByText('Phone List')).toBeInTheDocument;
    });

    expect(screen.getByText('Phone 1')).toBeInTheDocument;
    expect(screen.getByText('Phone 2')).toBeInTheDocument;
    expect(screen.getByText('Processor: Processor 2')).toBeInTheDocument;
    expect(screen.getByText('Manufacturer: Manufacturer 2')).toBeInTheDocument;
  });

   it('renders the phone data list', async () => {
    render(<App />);

    await waitFor(() => {
      expect(screen.getByText('Phone List')).toBeInTheDocument;
    });

    expect(screen.getByText('Phone 1')).toBeInTheDocument;
    expect(screen.getByText('Phone 2')).toBeInTheDocument;
   
  });

  it('renders error message when there is an error in fetching data', async () => {
    // Mock the fetch API to simulate an error
    global.fetch = jest.fn(() => Promise.reject(new Error('Failed to fetch data')));

    render(<App />);

    await waitFor(() => {
      expect(screen.getByText('Error: Failed to fetch data')).toBeInTheDocument;
    });
  });
});
