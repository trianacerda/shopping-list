import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// import ItemList from '../ItemList/ItemList';
import SingleItem from './SingleItem';
import App from '../../App';

const item = {
  id: 11,
  text: 'popcorn🍿',
  complete: false,
};

beforeEach(() => {
  render(<App />);
});

it('should render a single item within a list', async () => {
  const updateBtn = await screen.findAllByRole('button', { name: 'update' });
  userEvent.click(updateBtn[0]);
  const input = await screen.findAllByRole('textbox');
  waitFor(async () => {
    userEvent.type(input[0], 'pineapple');
    const updateItemInput = await screen.findByText('pineapple');
    expect(updateItemInput).toBeInTheDocument();
  });

  expect(updateBtn[0]).toBeInTheDocument();
});
