
import React, { createContext, useState, useContext } from 'react';
import { Producer } from '../types';
import { PRODUCERS } from '../constants';

interface AuthContextType {
  isAuthenticated: boolean;
  isProducer: boolean;
  currentUser: Producer | null;
  loginAsProducer: (producerId: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// In a real app, this would be a real user object
const mockProducer = PRODUCERS[0]; // Let's say the logged in user is the first producer

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isProducer, setIsProducer] = useState(false);
  const [currentUser, setCurrentUser] = useState<Producer | null>(null);

  const loginAsProducer = (producerId: string) => {
    const producer = PRODUCERS.find(p => p.id === producerId);
    if(producer){
        setIsAuthenticated(true);
        setIsProducer(true);
        setCurrentUser(producer);
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setIsProducer(false);
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, isProducer, currentUser, loginAsProducer, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
