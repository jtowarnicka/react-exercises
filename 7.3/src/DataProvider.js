import './style.scss';
import React, { useState, createContext, useContext } from 'react';

export const UserContext = createContext();

const DataProvider = ({ children }) => {
  const [registered, setRegistered] = useState(false);

  const register = (data) => {
    localStorage.setItem('user', JSON.stringify(data));
    setRegistered(true);
  };
  return (
    <UserContext.Provider value={{ registered, register }}>
      {children}
    </UserContext.Provider>
  );
};
export default DataProvider;
