import '../style.css';
import React, { createContext, useState } from 'react';
import LoginForm from './LoginForm';
import users from '../data/users.json';

export const UsersContext = createContext();

const DataProvider = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    if (!/^[^s@]+@[^s@]+.[^s@]+$/.test(email)) {
      setMessage('wrong email format');
    } else if (
      !/(?=.*[a-z])(?=.*[0-9])/.test(password) ||
      password.length < 5
    ) {
      setMessage('enter alphanumeric password');
    } else if (
      users.filter((user) => email === user.email && password === user.password)
        .length === 1
    ) {
      setIsLogged(true);
      setMessage('logging in...');
      setEmail('');
      setPassword('');
    } else {
      setMessage("i don't know you");
    }
  };
  return (
    <UsersContext.Provider value={isLogged}>
      <LoginForm
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleSubmit={handleSubmit}
        message={message}
        setMessage={setMessage}
      />
    </UsersContext.Provider>
  );
};

export default DataProvider;
