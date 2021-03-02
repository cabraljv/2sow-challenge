import { render } from '@testing-library/react';
import Header from '../components/Header';

describe('Header tests', () => {
  it('should to write in component', () => {
    const { getByText } = render(<Header title="Testing component" />);

    expect(getByText('Testing component')).toBeInTheDocument();
  });
});
