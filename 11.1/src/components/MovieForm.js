import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMovie } from '../actions/MovieActions.js';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const MovieForm = () => {
  const directors = useSelector((state) => state.directors);
  const dispatch = useDispatch();
  const handleSubmit = (movie) => {
    dispatch(addMovie(movie));
  };
  return (
    <Formik
      initialValues={{
        id: '',
        title: '',
        productionYear: '',
        director: '',
      }}
      validationSchema={Yup.object({
        title: Yup.string().required('title required'),
        productionYear: Yup.number()
          .required('year required')
          .positive('Production year must be a positive number'),
      })}
      onSubmit={(values, { resetForm }) => {
        handleSubmit(values);
        resetForm();
      }}
    >
      <Form className="form">
        <Field name="id" type="hidden" />
        <label htmlFor="title">title</label>
        <Field name="title" type="text" />
        <ErrorMessage name="title" />
        <label htmlFor="productionYear">production year</label>
        <Field name="productionYear" type="number" min={1950} />
        <ErrorMessage name="productionYear" />
        <label htmlFor="director">director</label>
        <Field
          name="director"
          className="form-select form-select-lg mb-3"
          as="select"
        >
          <option value="">Select director</option>
          {directors.map((x) => (
            <option key={x.id} value={x.id}>
              {x.firstName} {x.lastName}
            </option>
          ))}
        </Field>
        <button className="btn btn-outline-dark" type="submit">
          add
        </button>
      </Form>
    </Formik>
  );
};
export default MovieForm;
