import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { MdSearch } from 'react-icons/md';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header';
import ListItem from '../../components/ListItem';

import { Container, StyledInfiniteScroll } from './styles';
import Modal from '../../components/Modal';

interface IUser {
  id: number;
  name: string;
  street: string;
  city: string;
  district: string;
  email: string;
  cpf: string;
  cep: string;
  number: string;
}

const List: React.FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [atualPage, setAtualPage] = useState(1);
  const [hasNext, setHasNext] = useState(true);
  const [search, setSearch] = useState('');
  const [deleteItem, setDeleteItem] = useState<null | number>(null);

  const history = useHistory();

  const handleDelete = useCallback(async () => {
    if (deleteItem) {
      await axios.delete(`http://localhost:5000/usuarios/${deleteItem}`);
      setDeleteItem(null);
      setAtualPage(0);
      setUsers([]);
      getPage();
    }
  }, [deleteItem]);

  useEffect(() => {
    async function getData() {
      const response = await axios.get<IUser[]>(
        'http://localhost:5000/usuarios?_page=1&_limit=20'
      );
      setUsers(response.data);
    }
    getData();
  }, []);

  const handleSearch = useCallback(async () => {
    if (search.length > 0) {
      const response = await axios.get<IUser[]>(
        `http://localhost:5000/usuarios?q=${search}`
      );
      setUsers(response.data);
    }
    setHasNext(false);
  }, [search]);

  const getPage = useCallback(async () => {
    const response = await axios.get<IUser[]>(
      `http://localhost:5000/usuarios?_page=${atualPage + 1}&_limit=20`
    );
    if (response.data.length < 20) {
      setHasNext(false);
    }
    setUsers([...users, ...response.data]);
    setAtualPage(atualPage + 1);
  }, [atualPage, users]);

  return (
    <>
      <Header title="Usuários" />
      <Container>
        <header>
          <div className="search">
            <input
              type="text"
              placeholder="Buscar"
              onChange={(e) => setSearch(e.target.value)}
            />
            <button type="button" onClick={handleSearch}>
              <MdSearch />
            </button>
          </div>
          <button
            className="add-user"
            type="button"
            onClick={() => history.push('add-user')}
          >
            Adicionar novo registro
          </button>
        </header>
        <StyledInfiniteScroll
          dataLength={users.length}
          next={getPage}
          style={{
            width: 623,
          }}
          hasMore={hasNext}
          loader={<h4>Carregando...</h4>}
        >
          <table cellSpacing="0">
            <thead>
              <tr>
                <th>Nome</th>
                <th>CPF</th>
                <th>Email</th>
                <th>Cidade</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {users.map((item, index) => (
                <ListItem
                  data={item}
                  // eslint-disable-next-line react/no-array-index-key
                  key={index}
                  onDelete={() => setDeleteItem(item.id)}
                />
              ))}
            </tbody>
          </table>
        </StyledInfiniteScroll>
        <Modal open={!!deleteItem} onClose={() => setDeleteItem(null)}>
          <p className="modal-text">Você deseja deletar o item?</p>
          <div className="modal-buttons">
            <button type="button" onClick={() => setDeleteItem(null)}>
              Cancelar
            </button>
            <button type="button" onClick={handleDelete}>
              Remover
            </button>
          </div>
        </Modal>
      </Container>
    </>
  );
};

export default List;
