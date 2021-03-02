import { Route } from 'react-router-dom';
import Login from '../pages/Login';

const AuthRoutes: React.FC = () => {
  return (
    <>
      <Route path="/" exact component={Login} />
    </>
  );
};

export default AuthRoutes;
