import React, { useContext } from 'react';
import { UsersContext } from './DataProvider';

const LoginForm = (props) => {
  const { email, setEmail, password, setPassword, handleSubmit, message } =
    props;
  const handleChange = (set) => {
    return (event) => {
      set(event.target.value);
    };
  };

  return useContext(UsersContext) ? (
    <div>
      <h3>welcome</h3>
    </div>
  ) : (
    <div className="form">
      <label>email</label>
      <input type="text" value={email} onChange={handleChange(setEmail)} />
      <label>password</label>
      <input
        type="password"
        value={password}
        onChange={handleChange(setPassword)}
      />
      <button onClick={handleSubmit}>log in</button>
      <p>{message}</p>
    </div>
  );
};

export default LoginForm;
