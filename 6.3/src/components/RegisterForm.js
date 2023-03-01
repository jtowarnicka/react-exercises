import React, { useState, useEffect } from 'react';

const RegisterForm = (props) => {
  const {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    newEmail,
    setNewEmail,
    newPassword,
    setNewPassword,
    date,
    setDate,
    image,
    setImage,
    checkbox,
    setCheckbox,
    handleRegisterSubmit,
    reset,
    messageR,
    setMessageR,
  } = props;

  const [message, setMessage] = useState('');

  const handleChange = (set) => {
    return (event) => {
      set(event.target.value);
    };
  };

  useEffect(() => {
    if (firstName === '') {
      setMessage('enter your name');
    } else if (!/^[a-zA-ZąĄćĆęĘóÓłŁńŃżŻźŹ]*$/.test(firstName)) {
      setMessage('letters only!');
    } else if (lastName === '') {
      setMessage('enter your surname');
    } else if (!/^[a-zA-ZąĄćĆęĘóÓłŁńŃżŻźŹ]*$/.test(lastName)) {
      setMessage('letters only!');
    } else if (!/^[a-zA-Z]+[a-zA-Z0-9_.]+@[a-zA-Z.]+[a-zA-Z]$/.test(newEmail)) {
      setMessage('wrong email format');
    } else if (
      !/(?=.*[a-z])(?=.*[0-9])/.test(newPassword) &&
      newPassword.length < 5
    ) {
      setMessage('enter alphanumeric password');
    } else if (
      new Date(
        new Date().getFullYear() - 13,
        new Date().getMonth(),
        new Date().getDate()
      ) < new Date(date).getTime()
    ) {
      setMessage('you must be older than 13 yo');
    } else if (checkbox === false) {
      setMessage('you must accept terms and agreements');
    } else {
      setMessage('');
    }
  }, [firstName, lastName, newEmail, newPassword, date, checkbox, message]);

  const submit = () => {
    if (message === '') {
      setMessageR('registered!');
      handleRegisterSubmit();
    } else {
      setMessageR('enter correct information | registration failed');
    }
  };
  return (
    <div className="registration">
      <form onSubmit={submit}>
        <label>first name</label>
        <input
          type="text"
          value={firstName}
          onChange={handleChange(setFirstName)}
          required
        />
        <label>last name</label>
        <input
          type="text"
          value={lastName}
          onChange={handleChange(setLastName)}
          required
        />
        <label>email</label>
        <input
          type="text"
          value={newEmail}
          onChange={handleChange(setNewEmail)}
          required
        />
        <label>password</label>
        <input
          type="password"
          value={newPassword}
          onChange={handleChange(setNewPassword)}
          required
        />
        <label>date</label>
        <input
          type="date"
          value={date}
          onChange={handleChange(setDate)}
          required
        />
        <label>image</label>
        <input type="file" value={image} onChange={handleChange(setImage)} />
        <label>Accept terms and agreements</label>
        <input
          type="checkbox"
          value={checkbox}
          onChange={(e) => setCheckbox(e.target.checked)}
          required
        />
        <button type="submit">submit</button>
        <button onClick={reset}>reset</button>
        <p className="error">{message}</p>
        <p className="info">{messageR}</p>
      </form>
    </div>
  );
};

export default RegisterForm;
