import { createContext, useEffect, useState } from 'react';
import type { User } from 'firebase/auth';
import { onAuthChange, signInAnonymous } from '../firebase';

interface AuthContextType {
  user: User | null;
  loading: boolean;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
});

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthChange(async (user) => {
      if (user) {
        // L'utilisateur est déjà connecté
        setUser(user);
        setLoading(false);
      } else {
        // Pas d'utilisateur, connexion anonyme automatique
        try {
          const anonymousUser = await signInAnonymous();
          setUser(anonymousUser);
        } catch (error) {
          console.error('Erreur lors de la connexion anonyme:', error);
        } finally {
          setLoading(false);
        }
      }
    });

    return () => unsubscribe();
  }, []);

  const value = {
    user,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
