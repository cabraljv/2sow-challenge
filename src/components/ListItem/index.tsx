import { MdModeEdit, MdDelete } from 'react-icons/md';
import { useHistory } from 'react-router-dom';
import { Container } from './styles';

interface User {
  id: number;
  name: string;
  street: string;
  city: string;
  email: string;
  district: string;
  cpf: string;
  cep: string;
  number: string;
}

interface Props {
  data: User;
  onDelete: () => void;
}

const ListItem: React.FC<Props> = ({ data, onDelete }) => {
  const history = useHistory();
  return (
    <Container>
      <td>{data.name}</td>
      <td>{data.cpf}</td>
      <td>{data.email}</td>
      <td>{data.city}</td>
      <td>
        <button type="button" onClick={() => history.push(`/edit/${data.id}`)}>
          <MdModeEdit />
        </button>
        <button type="button" onClick={onDelete}>
          <MdDelete />
        </button>
      </td>
    </Container>
  );
};

export default ListItem;
