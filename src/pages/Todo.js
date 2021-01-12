import { useState } from "react";
import { Button, Container, Modal, Row } from "react-bootstrap";
import TodoForm from "../components/todo/TodoForm";
import TodoList from '../components/todo/TodoList'

function Todo() {
  const [todoModalVisibility, setTodoModalVisibility] = useState(false);

  const displayModal = () => setTodoModalVisibility(true);
  const closeModal = () => setTodoModalVisibility(false);

  return (
    <Container fluid className="p-4">
      <Row className="justify-content-end">
        <Button className="mr-2" onClick={ displayModal }>
          <i className="fa fa-plus"></i> Create To do
        </Button>
      </Row>
      <Row className="justify-content-center mt-4">
        <TodoList />
      </Row>
      <Modal show={ todoModalVisibility }>
        <Modal.Header closeButton onHide={ closeModal }>
            <Modal.Title>Create new To do</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <TodoForm closeModal={ closeModal } />
        </Modal.Body>
      </Modal>
    </Container>
  );
}
  
export default Todo;
  