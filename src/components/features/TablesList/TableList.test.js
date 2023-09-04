import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import TablesList from './TablesList';

const mockStore = configureStore([]);

describe('TablesList', () => {
  const tableData = {
    id: "1",
    "status": "Busy",
    "peopleAmount": 2,
    "maxPeopleAmount": 4,
    "bill": 47
  }
  const store = mockStore({
    tables: [tableData]
  })


  it('renders without crashing', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <TablesList />
        </MemoryRouter>
      </Provider>
    );
  });
});