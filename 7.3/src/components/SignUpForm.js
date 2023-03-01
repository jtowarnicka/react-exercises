import * as React from 'react';
import { useFormik } from 'formik';
import { UserContext } from '../DataProvider';

const SignUpForm = () => {
  const register = React.useContext(UserContext).register;

  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = 'Name Required';
    } else if (values.name.length > 15) {
      errors.name = 'Must be 15 characters or less';
    }

    if (!values.email) {
      errors.email = 'Email required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address';
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

    if (!values.gender) {
      errors.gender = 'Gender required';
    }

    if (!values.nationality) errors.nationality = 'Nationality required';

    if (!values.terms) {
      errors.terms = 'Acceptance of terms and agreements required';
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      gender: null,
      nationality: '',
      terms: false,
    },
    validate,
    onSubmit: (values) => {
      register(values);
    },
  });

  const handleReset = () => {
    formik.resetForm();
  };

  return (
    <form className="sign-up" onSubmit={formik.handleSubmit}>
      <label htmlFor="name">name</label>
      <input
        id="name"
        name="name"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}
      />
      <label htmlFor="email">email</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      <label htmlFor="password">password</label>
      <input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
      />
      <fieldset>
        <legend>gender</legend>
        <label htmlFor="male">male</label>
        <input
          id="male"
          name="gender"
          type="radio"
          value="male"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <label htmlFor="female">female</label>
        <input
          id="female"
          name="gender"
          type="radio"
          value="female"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <label htmlFor="other">other</label>
        <input
          id="other"
          name="gender"
          type="radio"
          value="other"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </fieldset>
      <label htmlFor="nationality">nationality</label>
      <input
        id="nationality"
        name="nationality"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.nationality}
        type="text"
      />
      <div>
        <input
          id="terms"
          name="terms"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.terms}
          type="checkbox"
        />
        <label htmlFor="terms">Accept terms and agreements</label>
      </div>
      <div>
        <button type="submit">Sign Up!</button>
        <button type="reset" onClick={handleReset}>
          Reset
        </button>
      </div>
      {formik.touched.name && formik.errors.name && (
        <div className="div-error">{formik.errors.name}</div>
      )}
      {formik.touched.email && formik.errors.email && (
        <div className="div-error">{formik.errors.email}</div>
      )}
      {formik.touched.password && formik.errors.password && (
        <div className="div-error">{formik.errors.password}</div>
      )}
      {formik.touched.gender && formik.errors.gender && (
        <div className="div-error">{formik.errors.gender}</div>
      )}
      {formik.touched.nationality && formik.errors.nationality && (
        <div className="div-error">{formik.errors.nationality}</div>
      )}
      {formik.touched.terms && formik.errors.terms && (
        <div className="div-error">{formik.errors.terms}</div>
      )}
    </form>
  );
};

export default SignUpForm;
