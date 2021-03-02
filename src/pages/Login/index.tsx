/* eslint-disable jsx-a11y/label-has-associated-control */
import { useCallback, useState } from 'react';
import { toast } from 'react-toastify';
import { Container, Field } from './styles';
import { useAuth } from '../../hooks/Auth';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn } = useAuth();

  const handleLogin = useCallback(async () => {
    const email_regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!email_regex.test(email)) {
      toast('Email inválido', { type: 'error' });
      return;
    }
    if (password.length < 4) {
      toast('Senha inválida', { type: 'error' });
      return;
    }
    await signIn(password, email);
  }, [password, email, signIn]);

  return (
    <Container>
      <main>
        <img src="http://www.tosow.com.br/assets/images/logo.png" alt="2sow" />
        <form>
          <Field>
            <input
              id="email"
              type="email"
              placeholder=" "
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="email">Email</label>
          </Field>
          <Field>
            <input
              id="passwd"
              type="password"
              placeholder=" "
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="passwd">Senha</label>
          </Field>
          <button type="button" onClick={handleLogin}>
            Entrar
          </button>
        </form>
      </main>
    </Container>
  );
};

export default Login;
