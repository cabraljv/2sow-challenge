import {
  createContext,
  useState,
  useContext,
  useEffect,
  useCallback,
} from 'react';

interface User {
  token: string;
}

interface AuthContextData {
  signed: boolean;
  user: User | null;
  loading: boolean;
  signIn: (password: string, email: string) => Promise<void>;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);

  const signIn = useCallback(async (password: string, email: string) => {
    if (password.length > 1 && email.length > 1) {
      setUser({
        token: 'algumacoisa',
      });
      localStorage.setItem(
        '@2sow:token',
        JSON.stringify({
          token: 'algumacoisa',
        })
      );
    }
  }, []);
  const signOut = useCallback(() => {
    setUser(null);
    localStorage.clear();
  }, []);
  useEffect(() => {
    const loaded_user = localStorage.getItem('@2sow:token');
    if (loaded_user) {
      setUser(JSON.parse(loaded_user));
    }
    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, loading, signed: !!user, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used from within an AuthProvider');
  }

  return context;
};
