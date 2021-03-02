/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useCallback, useState, useEffect } from 'react';
import * as Yup from 'yup';
import axios from 'axios';
import InputMask from 'react-input-mask';
import { useHistory, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Header from '../../components/Header';
import { Container } from './styles';

interface IUserData {
  name: string;
  street: string;
  city: string;
  district: string;
  cpf: string;
  cep: string;
  email: string;
  number: string;
}

interface Params {
  user_id: string;
}

const AddUser: React.FC = () => {
  const [userData, setUserData] = useState({} as IUserData);

  const { user_id } = useParams<Params>();
  const history = useHistory();

  useEffect(() => {
    async function getUser(id: string) {
      const response = await axios.get<IUserData>(
        `http://localhost:5000/usuarios/${id}`
      );

      setUserData(response.data);
    }

    if (user_id) {
      getUser(user_id);
    }
  }, [user_id]);

  const handleEdit = useCallback(async () => {
    const schema = Yup.object().shape({
      name: Yup.string().min(5).required(),
      street: Yup.string().min(5).required(),
      city: Yup.string().min(5).required(),
      district: Yup.string().required(),
      cpf: Yup.string().min(11).required(),
      cep: Yup.string().min(8).required(),
      number: Yup.string().required(),
    });
    if (!(await schema.isValid(userData))) {
      toast('Dados inválidos', { type: 'error' });
      return;
    }

    const response = await axios.put(
      `http://localhost:5000/usuarios/${user_id}`,
      userData
    );
    if (response.status === 200) {
      history.push('/');
    }
  }, [history, userData, user_id]);

  const handleSubmit = useCallback(async () => {
    const schema = Yup.object().shape({
      name: Yup.string().min(5).required(),
      street: Yup.string().min(5).required(),
      city: Yup.string().min(5).required(),
      district: Yup.string().required(),
      cpf: Yup.string().min(11).required(),
      cep: Yup.string().min(8).required(),
      number: Yup.string().required(),
    });
    if (!(await schema.isValid(userData))) {
      toast('Dados inválidos', { type: 'error' });
      return;
    }

    const response = await axios.post(
      'http://localhost:5000/usuarios',
      userData
    );
    if (response.status === 201) {
      history.push('/');
    }
  }, [userData, history]);

  const handleGetAdress = useCallback(
    async (cep: string) => {
      try {
        const response = await axios.get(
          `https://viacep.com.br/ws/${cep}/json/`
        );

        let aux = {} as IUserData;
        if (response.data.cep) {
          aux = { ...aux, cep: response.data.cep.replace('-', '') };
        }
        if (response.data.localidade) {
          aux = { ...aux, city: response.data.localidade };
        }
        if (response.data.bairro) {
          aux = { ...aux, district: response.data.bairro };
        }
        if (response.data.logradouro) {
          aux = { ...aux, street: response.data.logradouro };
        }
        setUserData({ ...userData, ...aux });
      } catch (error) {
        toast('Erro ao recuperar CEP', { type: 'error' });
      }
    },
    [userData]
  );

  return (
    <>
      <Header title={user_id ? 'Editar usuário' : 'Adicionar usuário'} />
      <Container>
        <form>
          <div className="field">
            <input
              id="name"
              type="text"
              value={userData.name ? userData.name : ''}
              onChange={(e) =>
                setUserData({ ...userData, name: e.target.value })
              }
            />
            <label htmlFor="name">Nome:</label>
          </div>
          <div className="field">
            <input
              id="email"
              type="email"
              value={userData.email ? userData.email : ''}
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
            />
            <label htmlFor="email">Email:</label>
          </div>
          <div className="field">
            <InputMask
              id="cpf"
              mask="99999999999"
              value={userData.cpf ? userData.cpf : ''}
              onChange={(e) =>
                setUserData({ ...userData, cpf: e.target.value })
              }
            />
            <label htmlFor="cpf">CPF:</label>
          </div>
          <div className="field">
            <InputMask
              id="postal-code"
              mask="99999999"
              value={userData.cep ? userData.cep : ''}
              onChange={(e) => {
                setUserData({ ...userData, cep: e.target.value });
                if (e.target.value.replaceAll('_', '').length === 8) {
                  handleGetAdress(e.target.value);
                }
              }}
            />
            <label htmlFor="postal-code">CEP:</label>
          </div>
          <div className="field">
            <input
              id="street"
              type="text"
              onChange={(e) =>
                setUserData({ ...userData, street: e.target.value })
              }
              value={userData.street ? userData.street : ''}
            />
            <label htmlFor="street">Rua:</label>
          </div>
          <div className="field">
            <input
              id="number"
              type="text"
              value={userData.number ? userData.number : ''}
              onChange={(e) =>
                setUserData({ ...userData, number: e.target.value })
              }
            />
            <label htmlFor="number">Número:</label>
          </div>
          <div className="field">
            <input
              id="district"
              type="text"
              onChange={(e) =>
                setUserData({ ...userData, district: e.target.value })
              }
              value={userData.district ? userData.district : ''}
            />
            <label htmlFor="district">Bairro:</label>
          </div>
          <div className="field">
            <input
              id="city"
              type="text"
              onChange={(e) =>
                setUserData({ ...userData, city: e.target.value })
              }
              value={userData.city ? userData.city : ''}
            />
            <label htmlFor="city">Cidade:</label>
          </div>
          <footer>
            <button
              type="button"
              className="cancel"
              onClick={() => history.push('/')}
            >
              Calcelar
            </button>
            <button
              type="button"
              className="add"
              onClick={user_id ? handleEdit : handleSubmit}
            >
              {user_id ? 'Adicionar alterações' : 'Adicionar usuário'}
            </button>
          </footer>
        </form>
      </Container>
    </>
  );
};

export default AddUser;
