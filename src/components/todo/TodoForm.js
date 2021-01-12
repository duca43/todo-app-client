import { Formik } from "formik";
import { Button, Col, Form, Modal } from "react-bootstrap";
import * as Yup from 'yup';
import { useDispatch } from "react-redux";
import { registerUser } from "../store/user/actions"
import { history } from "../App";
import { Modal } from "react-bootstrap";
import { PRIORITIES } from "../../util/todo"

const TodoSchema = Yup.object().shape({
  title: Yup.string()
    .max(50, 'Title is too Long!')
    .required('Title is required!'),
  description: Yup.string()
    .max(200, 'Description is too long!'),
  priority: Yup.object().shape({
    label: Yup.string().required('Required'),
    value: Yup.string().required('Required')
  })
});

const initialValues = {
  title: '',
  description: '',
  priority: '',
  completed: false
};

const TodoForm = ({ showModal }) => {

  const dispatch = useDispatch();

  const handleFormSubmit = (values) => {
    const todoData = {
      title: values.title,
      description: values.description,
      priority: values.priority,
      completed: values.completed
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
    <Modal show={ showModal }>
        <Modal.Header>
            <Modal.Title>Create new To do</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Formik initialValues = { initialValues } 
                validationSchema = { TodoSchema }
                onSubmit = { values => handleFormSubmit(values) }
            >
            {({ errors, touched, values, handleSubmit, handleChange }) => (
                <Form noValidate onSubmit={ handleSubmit } className="w-50">
                    <Form.Group controlId="title">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Title"
                            name="title"
                            value={ values.title }
                            onChange={ handleChange }
                            isValid={ !errors.title && touched.title }
                            isInvalid={ !!errors.title && touched.title }
                        />
                        <Form.Control.Feedback type="invalid">
                            { errors.title }
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control 
                            as="textarea"
                            rows={3}
                            placeholder="Description"
                            name="description"
                            value={ values.description }
                            onChange={ handleChange }
                            isValid={ !errors.description && touched.description }
                            isInvalid={ !!errors.description && touched.description }
                        />
                        <Form.Control.Feedback type="invalid">
                            { errors.description }
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="priority">
                        <Form.Label>Priority</Form.Label>
                        <Form.Control
                            as="select"
                            name="priority"
                            value={ values.priority }
                            onChange={ handleChange }
                        >
                            <option>
                                {Object.entries(PRIORITIES).map((key, value) =>
                                    <option key={ key } value={ key }>
                                        { value }
                                    </option>
                                )}
                            </option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="completed">
                        <Form.Label>Priority</Form.Label>
                        <Form.Check
                            type="checkbox"
                            id="completed"
                            name="completed"
                            label="Completed"
                            value={ values.completed }
                            onChange={ handleChange }
                        />
                    </Form.Group>
                    <Form.Row className="justify-content-center mt-3">
                        <Button type="submit">Create</Button>
                    </Form.Row>
                </Form>
            )}
            </Formik>
        </Modal.Body>
    </Modal>    
  );
};
  
export default TodoForm;