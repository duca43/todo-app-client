import { useEffect } from "react";
import { Card, Row, Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "../../store/todo/actions"
import { todosSelector } from "../../store/todo/selectors"
import { PRIORITIES } from "../../util/todo"

const todoCardStyle = {
  position: 'absolute',
  right: '-3%',
  top: '-6%',
  fontSize: '100%',
}

function TodoList() {

  const dispatch = useDispatch();
  const todos = useSelector(todosSelector);

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  const handleTodoCompletion = (completed) => {
    console.log(completed);
  }

  return (
    <Row className="w-100">
      {todos && todos.length === 0 ? 
        <h1>You have no any To do yet</h1>
        :
        todos.map(todo => (
          <Card className="mx-5 mb-5 w-25" key={ todo.id }>
            <Card.Header className='text-center'>
              <Button className='badge badge-pill badge-danger' style={ todoCardStyle }>
                  <i className="fa fa-times"></i>
              </Button>
              { todo.title }
            </Card.Header>
            <Card.Body>
              <Card.Text>
                Priority: { PRIORITIES[todo.priority] }
              </Card.Text>
              <Card.Text>
                Description: { todo.description }
              </Card.Text>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-between">
              <Form.Check
                type='checkbox'
                id={'completed' + (todo.id)}
                label='Completed'
                defaultChecked={ todo.completed }
                onClick={() => handleTodoCompletion(todo.completed)} 
              />
              <Card.Link role="button"><i className="fa fa-pencil mr-1"></i> Edit</Card.Link>
            </Card.Footer>
          </Card>
        ))
      }
    </Row>
  );
}
  
export default TodoList;