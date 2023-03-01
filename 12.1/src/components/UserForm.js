import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, editUser } from '../actions/UserActions.js';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const UserForm = ({ update }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const users = useSelector((state) => state.users);
  const user = users.find((u) => u.id === id);
  const dispatch = useDispatch();
  const handleSubmit = (user) => {
    update ? dispatch(editUser(user)) : dispatch(addUser(user));
  };
  const validationSchema = Yup.object().shape({
    username: Yup.string().required('required'),
    email: Yup.string().email().required('required'),
    password: Yup.string()
      .required('required')
      .min(8, 'Password is too short - should be 8 chars minimum.'),
  });

  return (
    <Formik
      initialValues={{
        id: update ? user.id : '',
        username: update ? user.username : '',
        email: update ? user.email : '',
        password: update ? user.password : '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        handleSubmit(values);
        update ? navigate('/', { replace: true }) : resetForm();
      }}
    >
      {({ isSubmitting }) => (
        <Form className="form">
          <label htmlFor="username">username</label>
          <Field type="text" name="username" />
          <ErrorMessage name="username" component="div" />
          <label htmlFor="email">email</label>
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" />
          <label htmlFor="password">password</label>
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="div" />
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
export default UserForm;
