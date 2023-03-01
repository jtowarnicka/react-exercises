import * as React from 'react';
import { useFormik } from 'formik';
import users from '../data/users.json';

const Form = () => {
  const [loggedIn, setLoggedIn] = React.useState(false);

  const validate = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = 'Required';
    } else if (values.username.length > 15) {
      errors.username = 'Must be 15 characters or less';
    } else if (values.username.length < 5) {
      errors.username = 'Must be 5 characters or more';
    } else if (!/^[a-zA-Z0-9\-]+$/.test(values.username)) {
      errors.username = 'non-alphanumeric characets';
    }

    if (!values.password) {
      errors.password = 'Required';
    } else if (values.password.length > 20) {
      errors.password = 'Must be 20 characters or less';
    } else if (values.password.length < 5) {
      errors.password = 'Must be 5 characters or more';
    } else if (!/(?=.*[a-z])(?=.*[0-9])/.test(values.password)) {
      errors.password = 'Enter alphanumeric password';
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validate,
    onSubmit: (values) => {
      if (
        users.some(
          (u) =>
            u.username === values.username && u.password === values.password
        )
      ) {
        setLoggedIn(true);
      } else {
        formik.resetForm();
      }
    },
  });

  return loggedIn ? (
    <div className="loggedin">
      <p>Zalogowano</p>
    </div>
  ) : (
    <div className="form">
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="username">username</label>
        <input
          id="username"
          name="username"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.username}
          required
        />
        <label htmlFor="password">password</label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          required
        />
        <button id="submit" type="submit">
          submit
        </button>
        {formik.touched.username && formik.errors.username && (
          <div>{formik.errors.username}</div>
        )}
        {formik.touched.password && formik.errors.password && (
          <div>{formik.errors.password}</div>
        )}
      </form>
    </div>
  );
};

export default Form;
