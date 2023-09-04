import { render } from '@testing-library/react';
import TablePage from './TablePage';



describe('Component TablePage', () => {
  it('should render without crashing', () => {
    render(
      <TablePage />
    )
  });
});