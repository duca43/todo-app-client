import { Formik } from "formik";
import { Button, Container, Form, Row } from "react-bootstrap";
import * as Yup from 'yup';
import { useDispatch } from "react-redux";
import { login } from "../store/user/actions"
import { history } from "../App";
import { useState } from "react";

const LoginSchema = Yup.object().shape({
  username: Yup.string()
    .required('Username is required!'),
  password: Yup.string()
    .required('Password is required!'),
});

const initialValues = {
  username: '',
  password: ''
};

const Login = () => {

  const dispatch = useDispatch();
  const [passwordType, setPasswordType] = useState('password');

  const handleFormSubmit = (values) => {
    const credentials = {
      username: values.username,
      password: values.password
    }
    dispatch(
      login({
        ...credentials,
        callback: () => {
          history.push("/");
        }
      })
    );
  }

  return (
    <Container fluid>
      <Row className="justify-content-center mt-4">
        <h2>Sign In</h2>
      </Row>
      <Row className="justify-content-center mt-4">
      <Formik initialValues = { initialValues } 
        validationSchema = { LoginSchema }
        onSubmit = { values => handleFormSubmit(values) }
        >
          {({ values, handleSubmit, handleChange }) => (
            <Form noValidate onSubmit={ handleSubmit } className="w-25">
              <Form.Group controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Username"
                  name="username"
                  value={ values.username }
                  onChange={ handleChange }
                />
              </Form.Group>
              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type={ passwordType }
                  placeholder="Password"
                  name="password"
                  value={ values.password }
                  onChange={ handleChange }
                />
              </Form.Group>
              <Form.Check 
                type='checkbox'
                id='showPassword'
                label='Show password'
                onClick={() => passwordType === 'password' ? setPasswordType('text') : setPasswordType('password')}
              />
              <Form.Row className="justify-content-center mt-4">
                <Button type="submit">Sign In</Button>
              </Form.Row>
            </Form>
          )}
        </Formik>
      </Row>
    </Container>      
  );
};
  
export default Login;