import { Formik } from "formik";
import { Button, Form } from "react-bootstrap";
import * as Yup from 'yup';
import { PRIORITIES } from "../../util/todo";
import { useTranslation } from 'react-i18next';

const TodoForm = ({ closeModal, initialValues , handleFormSubmit }) => {
    
    const { t } = useTranslation(['todos']);

    const TodoSchema = Yup.object().shape({
        title: Yup.string()
          .max(50, t('title_max'))
          .required(t('title_required')),
        description: Yup.string()
          .max(200, t('description_max'))
      });

    return (
        <Formik initialValues = { initialValues } 
            validationSchema = { TodoSchema }
            onSubmit = { values => handleFormSubmit(values) }
        >
        {({ errors, touched, values, handleSubmit, handleChange }) => (
            <Form noValidate onSubmit={ handleSubmit }>
                <Form.Group controlId="title">
                    <Form.Label>{ t('title') }</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder={ t('title') }
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
                    <Form.Label>{ t('description') }</Form.Label>
                    <Form.Control 
                        as="textarea"
                        rows={3}
                        placeholder={ t('description') }
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
                    <Form.Label>{ t('priority') }</Form.Label>
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
                        label={ t('completed') }
                        defaultChecked={ values.completed }
                        value={ values.completed }
                        onChange={ handleChange }
                    />
                </Form.Group>
                <Form.Row className="justify-content-center mt-3">
                    <Button type="submit" className="mx-2">{ t('translation:confirm') }</Button>
                    <Button variant="secondary" className="mx-2" onClick={ closeModal }>{ t('translation:close') }</Button>
                </Form.Row>
            </Form>
        )}
        </Formik>
    );
}
  
export default TodoForm;