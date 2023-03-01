import React, { useContext, useEffect } from 'react';
import { UsersContext } from './DataProvider';

const LoginForm = (props) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleSubmit,
    message,
    setMessage,
  } = props;
  const handleChange = (set) => {
    return (event) => {
      set(event.target.value);
    };
  };

  useEffect(() => {
    if (!/^[^s@]+@[^s@]+.[^s@]+$/.test(email)) {
      setMessage('wrong email format');
    } else if (
      !/(?=.*[a-z])(?=.*[0-9])/.test(password) ||
      password.length < 5
    ) {
      setMessage('enter aplhanumeric password');
    } else {
      setMessage('');
    }
  }, [email, password]);

  return useContext(UsersContext) ? (
    <div className="loggedin">
      <p>welcome</p>
    </div>
  ) : (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label>email</label>
        <input type="text" value={email} onChange={handleChange(setEmail)} />
        <label>password</label>
        <input
          type="password"
          value={password}
          onChange={handleChange(setPassword)}
        />
        <button type="submit">log in</button>
        <p className="error">{message}</p>
      </form>
    </div>
  );
};

export default LoginForm;
