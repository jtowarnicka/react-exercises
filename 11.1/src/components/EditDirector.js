import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { editDirector } from '../actions/DirectorActions.js';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const EditDirector = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const directors = useSelector((state) => state.directors);
  const director = directors.find((d) => d.id === id);

  const dispatch = useDispatch();
  const handleSubmit = (director) => {
    dispatch(editDirector(director));
    navigate('/directors', { replace: true });
  };

  const validationSchema = Yup.object().shape({
    id: Yup.string().required('required'),
    firstName: Yup.string().required('required'),
    lastName: Yup.string().required('required'),
    age: Yup.number()
      .positive('age must be a positive number')
      .required('required'),
  });

  return (
    <Formik
      initialValues={{
        id: director.id,
        firstName: director.firstName,
        lastName: director.lastName,
        age: director.age,
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
export default EditDirector;
