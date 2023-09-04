import { render } from '@testing-library/react';
import Homepage from './Homepage';



describe('Component Homepage', () => {
  it('should render without crashing', () => {
    render(
      <Homepage />
    )
  });
});