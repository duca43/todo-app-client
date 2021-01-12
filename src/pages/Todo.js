import { Button, Container, Row } from "react-bootstrap";
import TodoList from '../components/todo/TodoList'

function Todo() {
  return (
    <Container fluid className="p-4">
      <Row className="justify-content-end">
        <Button className="mr-2">
          <i className="fa fa-plus"></i> Create To do
        </Button>
      </Row>
      <Row className="justify-content-center mt-4">
        <TodoList />
      </Row>
    </Container>
  );
}
  
export default Todo;
  