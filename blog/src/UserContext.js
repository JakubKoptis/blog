import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  const login = (username, password) => {

    const correctPassword = 'heslos123';
    
    if (password === correctPassword) {
      setUser({ username });
      setError('');
    } else {
      setError('Invalid username or password');
    }
  };

  const logout = () => setUser(null);

  return (
    <UserContext.Provider value={{ user, login, logout, error }}>
      {children}
    </UserContext.Provider>
  );
};
