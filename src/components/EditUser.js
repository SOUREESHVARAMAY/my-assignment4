import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const EditUser = ({ users, updateUser }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const userToEdit = users.find((user) => user.id === parseInt(id));

  if (!userToEdit) {
    return <p>User not found</p>;
  }

  const initialValues = {
    name: userToEdit.name,
    email: userToEdit.email,
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
  });

  const handleSubmit = (values) => {
    updateUser({ ...userToEdit, ...values });
    navigate('/users');
  };

  return (
    <div>
      <h2>Edit User</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <label>Name:</label>
            <Field type="text" name="name" />
            <ErrorMessage name="name" component="div" className="error" />

            <label>Email:</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" className="error" />

            <button type="submit">Update User</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default EditUser;
