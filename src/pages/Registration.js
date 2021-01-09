import { Formik } from "formik";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import * as Yup from 'yup';
import { useDispatch } from "react-redux";
import { registerUser } from "../store/user/actions"
import { history } from "../App";

const RegistrationSchema = Yup.object().shape({
  username: Yup.string()
    .min(4, 'Username is too short!')
    .max(150, 'Username is too Long!')
    .required('Username is required!'),
  password: Yup.string()
    .min(8, 'Password is too short!')
    .max(128, 'Password is too long!')
    .required('Password is required!'),
  first_name: Yup.string()
    .min(2, 'First name is too short!')
    .max(150, 'First name is too long!')
    .required('First name is required!'),
  last_name: Yup.string()
    .min(2, 'Last name is too short!')
    .max(150, 'Last name is too long!')
    .required('Last name is required!'),
  email: Yup.string()
    .email('Invalid email format!')
    .max(254, 'Email is too long!')
    .required('Email is required!'),
  address: Yup.string()
    .max(100, 'Address is too long!'),
  city: Yup.string()
    .max(50, 'City name is too long!'),
  country: Yup.string()
    .max(50, 'Country name is too long!'),
});

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

  const handleFormSubmit = (values) => {
    const registrationData = {
      username: values.username,
      password: values.password,
      email: values.email,
      first_name: values.first_name,
      last_name: values.last_name,
      address: values.address,
      city: values.city,
      country: values.country
    }
    dispatch(
      registerUser({
        ...registrationData,
        callback: () => {
          history.push("/");
        }
      })
    );
  }

  return (
    <Container fluid>
      <Row className="justify-content-center mt-4">
        <h2>Sign Up to our TodoApp</h2>
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
                  <Form.Label>First name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="First name"
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
                  <Form.Label>Last name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Last name"
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
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Username"
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
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
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
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Email"
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
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Address"
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
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="City"
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
                  <Form.Label>Country</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Country"
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
                <Button type="submit">Sign Up</Button>
              </Form.Row>
            </Form>
          )}
        </Formik>
      </Row>
    </Container>      
  );
};
  
export default Registration;