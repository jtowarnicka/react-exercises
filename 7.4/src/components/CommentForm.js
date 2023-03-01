import { useFormik } from 'formik';
import React from 'react';

const CommentForm = (props) => {
  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = 'Required';
    } else if (values.name.length < 2) {
      errors.name = 'Name must be between 1 and 20 characters';
    } else if (values.name.length > 20) {
      errors.name = 'Name must be between 1 and 20 characters';
    }

    if (!values.email) {
      errors.email = 'Required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address';
    }

    if (values.body.length > 200) {
      errors.body = 'Must be 200 characters or less';
    }

    return errors;
  };
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      body: '',
    },
    validate,
    onSubmit: (values) => {
      props.postComment(values);
      formik.resetForm();
    },
  });

  const handleReset = () => {
    formik.resetForm();
  };
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="name">name</label>
      <input
        id="name"
        name="name"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}
      />
      {formik.touched.name && formik.errors.name ? (
        <div>{formik.errors.name} </div>
      ) : null}
      <label htmlFor="email">email</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}
      <label htmlFor="body">body</label>
      <textarea
        id="body"
        name="body"
        type="textarea"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.body}
      />
      {formik.touched.body && formik.errors.body ? (
        <div>{formik.errors.body}</div>
      ) : null}
      <button type="submit">Submit</button>
      <button type="reset" onClick={handleReset}>
        Reset
      </button>
    </form>
  );
};
export default CommentForm;
