import '../style.css';
import React, { createContext, useState } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import Table from './Table';

export const UsersContext = createContext();

const DataProvider = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [messageR, setMessageR] = useState('');

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [date, setDate] = useState(new Date().toString());
  const [image, setImage] = useState('');
  const [checkbox, setCheckbox] = useState(false);

  const [user, setUser] = useState(null);

  const handleSubmit = () => {
    const usr = JSON.parse(localStorage.getItem(email));
    if (usr === null) {
      return setMessage("i don't know you");
    } else if (password === usr.password) {
      setUser({ email: email, ...usr });
      setEmail('');
      setPassword('');
      setIsLogged(true);
    } else {
      setIsLogged(false);
      setMessage('login attempt failed');
    }
  };

  const handleRegisterSubmit = () => {
    const user = JSON.stringify({
      firstName: firstName,
      lastName: lastName,
      email: newEmail,
      password: newPassword,
      date: date,
      image: image,
      checkbox: checkbox,
    });
    window.localStorage.setItem(newEmail, user);
  };

  const reset = () => {
    setFirstName('');
    setLastName('');
    setNewEmail('');
    setNewPassword('');
    setDate(new Date().toString());
    setImage('');
    setCheckbox(false);
  };
  return (
    <UsersContext.Provider value={isLogged}>
      <RegisterForm
        firstName={firstName}
        setFirstName={setFirstName}
        lastName={lastName}
        setLastName={setLastName}
        newEmail={newEmail}
        setNewEmail={setNewEmail}
        newPassword={newPassword}
        setNewPassword={setNewPassword}
        date={date}
        setDate={setDate}
        image={image}
        setImage={setImage}
        checkbox={checkbox}
        setCheckbox={setCheckbox}
        handleRegisterSubmit={handleRegisterSubmit}
        reset={reset}
        messageR={messageR}
        setMessageR={setMessageR}
      />
      <Table user={user} />
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
