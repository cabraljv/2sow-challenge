import { fireEvent, render } from '@testing-library/react';
import App from '../App';

describe('Login tests', () => {
  it('should to open the login page', () => {
    const { getByText } = render(<App />);

    expect(getByText('Entrar')).toBeInTheDocument();
  });
  it('should to block login action', () => {
    const { getByText } = render(<App />);

    const button = getByText('Entrar');

    fireEvent.click(button);

    expect(getByText('Entrar')).toBeInTheDocument();
  });
  it('should to realize login', () => {
    const { getByText, getByLabelText } = render(<App />);

    const button = getByText('Entrar');
    const email = getByLabelText('Email');
    const password = getByLabelText('Senha');

    fireEvent.change(email, { target: { value: 'test@test.com' } });
    fireEvent.change(password, { target: { value: '12345' } });

    fireEvent.click(button);

    expect(getByText('CPF')).toBeInTheDocument();
  });
});
