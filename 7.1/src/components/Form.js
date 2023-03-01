import * as React from 'react';
import users from '../data/users.json';

const Form = () => {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [user, setUser] = React.useState({
    username: '',
    password: '',
  });

  const [errorName, setErrorName] = React.useState('');
  const [errorPassword, setErrorPassword] = React.useState('');
  const [message, setMessage] = React.useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  };

  React.useEffect(() => {
    if (!user.username) {
      setErrorName('');
    } else if (!/^[a-zA-Z0-9\-]+$/.test(user.username)) {
      setErrorName('non-alphanumeric characters are not allowed');
    } else if (user.username.length > 15) {
      setErrorName('too long username');
    } else if (user.username.length < 5) {
      setErrorName('too short username');
    } else {
      setErrorName('');
    }

    if (!user.password) {
      setErrorPassword('');
    } else if (user.password.length < 5) {
      setErrorPassword('enter password longer than 5 characters');
    } else if (!/(?=.*[a-z])(?=.*[0-9])/.test(user.password)) {
      setErrorPassword('enter alphanumeric password');
    } else if (user.password.length > 20) {
      setErrorPassword('too long password');
    } else {
      setErrorPassword('');
    }
  }, [user]);

  const handleSubmit = () => {
    if (!/^[a-zA-Z0-9\-]+$/.test(user.username) || user.username.length > 15) {
      setMessage('wrong username format');
    } else if (
      !/(?=.*[a-z])(?=.*[0-9])/.test(user.password) ||
      user.password.length < 5
    ) {
      setMessage('enter alphanumeric password longer than 5 characters');
    } else if (
      users.filter(
        (u) => user.username === u.username && user.password === u.password
      ).length === 1
    ) {
      setLoggedIn(true);
      setMessage('You have successfully logged in.');
    } else {
      console.log(users);
      console.log(user.username, user.password);
      setMessage('Login failed');
    }
  };

  return loggedIn ? (
    <div className="loggedin">
      <p>{message}</p>
    </div>
  ) : (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">username</label>
        <input
          id="username"
          name="username"
          type="text"
          value={user.username}
          onChange={handleChange}
          minlength={5}
          required
        />
        <p>{errorName}</p>
        <label htmlFor="password">password</label>
        <input
          id="password"
          name="password"
          type="password"
          value={user.password}
          onChange={handleChange}
          required
        />
        <p>{errorPassword}</p>
        <button id="submit" type="submit">
          submit
        </button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default Form;
