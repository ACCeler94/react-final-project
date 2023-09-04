import { render } from '@testing-library/react';
import TableForm from './TableForm';



describe('Component TableForm', () => {
  it('should render without crashing', () => {
    render(
      <TableForm />
    )
  });
});