import { Formik } from "formik";
import { Button, Form } from "react-bootstrap";
import * as Yup from 'yup';
import { PRIORITIES } from "../../util/todo"

const TodoSchema = Yup.object().shape({
  title: Yup.string()
    .max(50, 'Title is too Long!')
    .required('Title is required!'),
  description: Yup.string()
    .max(200, 'Description is too long!')
});

const TodoForm = ({ closeModal, initialValues , handleFormSubmit }) => (
    <Formik initialValues = { initialValues } 
        validationSchema = { TodoSchema }
        onSubmit = { values => handleFormSubmit(values) }
    >
    {({ errors, touched, values, handleSubmit, handleChange }) => (
        <Form noValidate onSubmit={ handleSubmit }>
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
                  {Object.keys(PRIORITIES).map(key =>
                    <option key={ key } value={ key }>
                        { PRIORITIES[key] }
                    </option>
                  )}
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="completed">
                <Form.Check
                    type="checkbox"
                    id="completed"
                    name="completed"
                    label="Completed"
                    defaultChecked={ values.completed }
                    value={ values.completed }
                    onChange={ handleChange }
                />
            </Form.Group>
            <Form.Row className="justify-content-center mt-3">
                <Button type="submit" className="mx-2">Confirm</Button>
                <Button variant="secondary" className="mx-2" onClick={ closeModal }>Close</Button>
            </Form.Row>
        </Form>
    )}
    </Formik>
);
  
export default TodoForm;