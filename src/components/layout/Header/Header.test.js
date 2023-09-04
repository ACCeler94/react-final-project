import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';



describe('Header', () => {


  it('renders without crashing', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
  });
});