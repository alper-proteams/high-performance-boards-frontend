'use client';
import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import AuthService from '@/app/services/auth.service';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const initializeAuth = async () => {
      // Check for the existence of the "authFlag" in local storage
      const authFlag = localStorage.getItem('user');

      if (!authFlag) {
        setIsAuthenticated(false);
        setUser(null);
        setIsLoading(false);
        // console.log('authFlag:', authFlag);
        return;
      }

      try {
        const data = await AuthService.checkAuthStatus();
        setIsAuthenticated(true);
        setUser(data);
        // console.log('setUser:', isAuthenticated, data);
      } catch (err) {
        console.log('Auth Error:', err.status || err.toString());

        if (err.status === 401) {
          setIsAuthenticated(false);
          setUser(null);
        } else {
          console.error('Error during auth initialization:', err);
        }
      }
      setIsLoading(false);
    };

    initializeAuth();
  }, []);

  const login = async (username, password) => {
    try {
      const data = await AuthService.login({ identifier: username, password });
      // console.log('Login success data', data);

      if (data.user) {
        setIsAuthenticated(true);
        setUser(data.user);

        localStorage.setItem('user', JSON.stringify(data));

        router.push('/board');
      } else {
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
      const serverErrorMessage =
        error.message || 'An unexpected error occurred.';
      return serverErrorMessage;
    }
  };

  const logout = async () => {
    try {
      // await AuthService.logout();
      setIsAuthenticated(false);
      setUser(null);

      localStorage.removeItem('user');
      // console.log('logout removeItem');
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  if (isLoading) {
    // loading ui
    return <></>;
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        setUser,
        isLoading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
