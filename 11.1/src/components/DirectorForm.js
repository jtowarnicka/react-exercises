import React from 'react';
import { useDispatch } from 'react-redux';
import { addDirector } from '../actions/DirectorActions.js';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const DirectorForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (director) => {
    dispatch(addDirector(director));
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('required'),
    lastName: Yup.string().required('required'),
    age: Yup.number()
      .positive('age must be a positive number')
      .required('required'),
  });

  return (
    <Formik
      initialValues={{
        id: '',
        firstName: '',
        lastName: '',
        age: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        handleSubmit(values);
        resetForm();
      }}
    >
      {({ isSubmitting }) => (
        <Form className="form">
          <label htmlFor="firstName">first name</label>
          <Field type="text" name="firstName" />
          <ErrorMessage name="firstName" component="div" />
          <label htmlFor="last name">last name</label>
          <Field type="text" name="lastName" />
          <ErrorMessage name="lastName" component="div" />
          <label htmlFor="age">age</label>
          <Field type="number" name="age" />
          <ErrorMessage name="age" component="div" />
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn btn-outline-dark"
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};
export default DirectorForm;
