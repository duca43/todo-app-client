import { useState } from "react";
import { Button, Container, Modal, Row } from "react-bootstrap";
import CreateTodo from "../components/todo/CreateTodo";
import TodoList from '../components/todo/TodoList'
import { useTranslation } from 'react-i18next';

function Todo() {
  const [todoModalVisibility, setTodoModalVisibility] = useState(false);
  const { t } = useTranslation(['todos']);

  const displayModal = () => setTodoModalVisibility(true);
  const closeModal = () => setTodoModalVisibility(false);

  return (
    <Container fluid className="p-4">
      <Row className="justify-content-end">
        <Button className="mr-2" onClick={ displayModal }>
          <i className="fa fa-plus"></i> { t('create_todo') }
        </Button>
      </Row>
      <Row className="justify-content-center mt-4">
        <TodoList />
      </Row>
      <Modal show={ todoModalVisibility }>
        <Modal.Header closeButton onHide={ closeModal }>
            <Modal.Title>{ t('create_new_todo') }</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CreateTodo closeModal={ closeModal } />
        </Modal.Body>
      </Modal>
    </Container>
  );
}
  
export default Todo;
  