import { Formik } from "formik";
import { Button, Container, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { login } from "../store/user/actions"
import { history } from "../App";
import { useState } from "react";
import { useTranslation } from 'react-i18next';

const initialValues = {
  username: '',
  password: ''
};

const Login = () => {

  const dispatch = useDispatch();
  const [passwordType, setPasswordType] = useState('password');
  const { t } = useTranslation(['sign_forms']);

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
        <h2>{ t('sign_in_title') }</h2>
      </Row>
      <Row className="justify-content-center mt-4">
      <Formik initialValues = { initialValues }
        onSubmit = { values => handleFormSubmit(values) }
        >
          {({ values, handleSubmit, handleChange }) => (
            <Form noValidate onSubmit={ handleSubmit } className="w-25">
              <Form.Group controlId="username">
                <Form.Label>{ t('username') }</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={ t('username') }
                  name="username"
                  value={ values.username }
                  onChange={ handleChange }
                />
              </Form.Group>
              <Form.Group controlId="password">
                <Form.Label>{ t('password') }</Form.Label>
                <Form.Control
                  type={ passwordType }
                  placeholder={ t('password') }
                  name="password"
                  value={ values.password }
                  onChange={ handleChange }
                />
              </Form.Group>
              <Form.Check 
                type='checkbox'
                id='showPassword'
                label={ t('show_password') }
                onClick={() => passwordType === 'password' ? setPasswordType('text') : setPasswordType('password')}
              />
              <Form.Row className="justify-content-center mt-4">
                <Button type="submit">{ t('navmenu:sign_in') }</Button>
              </Form.Row>
            </Form>
          )}
        </Formik>
      </Row>
    </Container>      
  );
};
  
export default Login;