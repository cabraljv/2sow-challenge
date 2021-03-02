import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';
import { useAuth } from '../hooks/Auth';

const Routes: React.FC = () => {
  const { signed } = useAuth();
  return signed ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
