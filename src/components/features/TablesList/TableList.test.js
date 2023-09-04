import { render } from '@testing-library/react';
import TablesList from './TablesList';



describe('Component TablesList', () => {
  it('should render without crashing', () => {
    render(
      <TablesList />
    )
  });
});