import { Formik } from "formik";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import * as Yup from 'yup';
import { useDispatch } from "react-redux";
import { registerUser } from "../store/user/actions"
import { history } from "../App";
import { useTranslation } from 'react-i18next';

const initialValues = {
  username: '',
  password: '',
  email: '',
  first_name: '',
  last_name: '',
  address: '',
  city: '',
  country: ''
};

const Registration = () => {

  const dispatch = useDispatch();
  const { t } = useTranslation(['sign_forms']);

  const RegistrationSchema = Yup.object().shape({
    username: Yup.string()
      .min(4, t('username_min'))
      .max(150, t('username_max'))
      .required(t('username_required')),
    password: Yup.string()
      .min(8, t('password_min'))
      .max(128, t('password_max'))
      .required(t('password_required')),
    first_name: Yup.string()
      .min(2, t('first_name_min'))
      .max(150, t('first_name_max'))
      .required(t('first_name_required')),
    last_name: Yup.string()
      .min(2, t('last_name_min'))
      .max(150, t('last_name_max'))
      .required(t('last_name_required')),
    email: Yup.string()
      .email(t('email_invalid'))
      .max(254, t('email_max'))
      .required(t('email_required')),
    address: Yup.string()
      .max(100, t('address_max')),
    city: Yup.string()
      .max(50, t('city_max')),
    country: Yup.string()
      .max(50, t('country_max')),
  });

  const handleFormSubmit = (values) => {
    dispatch(
      registerUser({
        ...values,
        callback: () => {
          history.push("/");
        }
      })
    );
  }

  return (
    <Container fluid>
      <Row className="justify-content-center mt-4">
        <h2>{ t('sign_up_title') }</h2>
      </Row>
      <Row className="justify-content-center mt-4">
      <Formik initialValues = { initialValues } 
        validationSchema = { RegistrationSchema }
        onSubmit = { values => handleFormSubmit(values) }
        >
          {({ errors, touched, values, handleSubmit, handleChange }) => (
            <Form noValidate onSubmit={ handleSubmit } className="w-50">
              <Form.Row>
                <Form.Group as={ Col } md="6" controlId="firstName">
                  <Form.Label>{ t('first_name') }</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder={ t('first_name') }
                    name="first_name"
                    value={ values.first_name }
                    onChange={ handleChange }
                    isValid={ !errors.first_name && touched.first_name }
                    isInvalid={ errors.first_name && touched.first_name }
                  />
                  <Form.Control.Feedback type="invalid">
                    { errors.first_name }
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={ Col } md="6" controlId="lastName">
                  <Form.Label>{ t('last_name') }</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder={ t('last_name') }
                    name="last_name"
                    value={ values.last_name }
                    onChange={ handleChange }
                    isValid={ !errors.last_name && touched.last_name }
                    isInvalid={ !!errors.last_name && touched.last_name }
                  />
                  <Form.Control.Feedback type="invalid">
                    { errors.last_name }
                  </Form.Control.Feedback>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={ Col } md="6" controlId="username">
                  <Form.Label>{ t('username') }</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder={ t('username') }
                    name="username"
                    value={ values.username }
                    onChange={ handleChange }
                    isValid={ !errors.username && touched.username }
                    isInvalid={ !!errors.username && touched.username }
                  />
                  <Form.Control.Feedback type="invalid">
                    { errors.username }
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={ Col } md="6" controlId="password">
                  <Form.Label>{ t('password') }</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder={ t('password') }
                    name="password"
                    value={ values.password }
                    onChange={ handleChange }
                    isValid={ !errors.password && touched.password }
                    isInvalid={ !!errors.password && touched.password }
                  />
                  <Form.Control.Feedback type="invalid">
                    { errors.password }
                  </Form.Control.Feedback>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={ Col } md="6" controlId="email">
                  <Form.Label>{ t('email') }</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder={ t('email') }
                    name="email"
                    value={ values.email }
                    onChange={ handleChange }
                    isValid={ !errors.email && touched.email }
                    isInvalid={ !!errors.email && touched.email }
                  />
                  <Form.Control.Feedback type="invalid">
                    { errors.email }
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={ Col } md="6" controlId="address">
                  <Form.Label>{ t('address') }</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder={ t('address') }
                    name="address"
                    value={ values.address }
                    onChange={ handleChange }
                    isValid={ !errors.address && touched.address }
                    isInvalid={ !!errors.address && touched.address }
                  />
                  <Form.Control.Feedback type="invalid">
                    { errors.address }
                  </Form.Control.Feedback>
                </Form.Group>
              </Form.Row>
              <Form.Row>
              <Form.Group as={ Col } md="6" controlId="city">
                  <Form.Label>{ t('city') }</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder={ t('city') }
                    name="city"
                    value={ values.city }
                    onChange={ handleChange }
                    isValid={ !errors.city && touched.city }
                    isInvalid={ !!errors.city && touched.city }
                  />
                  <Form.Control.Feedback type="invalid">
                    { errors.city }
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={ Col } md="6" controlId="country">
                  <Form.Label>{ t('country') }</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder={ t('country') }
                    name="country"
                    value={ values.country }
                    onChange={ handleChange }
                    isValid={ !errors.country && touched.country }
                    isInvalid={ !!errors.country && touched.country }
                  />
                  <Form.Control.Feedback type="invalid">
                    { errors.country }
                  </Form.Control.Feedback>
                </Form.Group>
              </Form.Row>
              <Form.Row className="justify-content-center mt-3">
                <Button type="submit">{ t('navmenu:sign_up') }</Button>
              </Form.Row>
            </Form>
          )}
        </Formik>
      </Row>
    </Container>      
  );
};
  
export default Registration;