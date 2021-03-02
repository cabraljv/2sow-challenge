import { Route } from 'react-router-dom';
import AddUser from '../pages/AddUser';
import List from '../pages/List';

const AppRoutes: React.FC = () => {
  return (
    <>
      <Route path="/" exact component={List} />
      <Route path="/add-user" component={AddUser} />
      <Route path="/edit/:user_id" component={AddUser} />
    </>
  );
};

export default AppRoutes;
