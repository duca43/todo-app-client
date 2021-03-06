import { useEffect, useState } from "react";
import { Card, Row, Button, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getTodos, patchTodo, deleteTodo } from "../../store/todo/actions"
import { todosSelector } from "../../store/todo/selectors"
import { PRIORITIES } from "../../util/todo"
import UpdateTodo from "./UpdateTodo";
import { useTranslation } from 'react-i18next';

const todoCardStyle = {
  position: 'absolute',
  right: '-3%',
  top: '-6%',
  fontSize: '100%',
}

function TodoList() {

  const dispatch = useDispatch();
  const todos = useSelector(todosSelector);
  const [todoModalVisibility, setTodoModalVisibility] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState();
  const [deleteTodoModalVisibility, setDeleteTodoModalVisibility] = useState(false);
  const { t } = useTranslation(['todos']);

  const displayTodoModal = () => setTodoModalVisibility(true);
  const closeTodoModal = () => setTodoModalVisibility(false);

  const displayDeleteTodoModal = () => setDeleteTodoModalVisibility(true);
  const closeDeleteTodoModal = () => setDeleteTodoModalVisibility(false);

  const openUpdateTodoDialog = (todo) => {
    setSelectedTodo(todo);
    displayTodoModal();
  }

  const openDeleteTodoDialog = (todo) => {
    setSelectedTodo(todo);
    displayDeleteTodoModal();
  }

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  const handleTodoCompletion = (todo) => {
    dispatch(
      patchTodo({
        id: todo.id,
        completed: !todo.completed
      })
    );
  }

  const handleTodoDeleting = () => {
    dispatch(
      deleteTodo({
        id: selectedTodo.id,
        callback: () => {
          closeDeleteTodoModal();
        }
      })
    );
  }

  return (
    <Row className="w-100">
      {todos && todos.length === 0 ? 
         <Row className="w-100 justify-content-center">
           <h1>{ t('no_todos_message') }</h1>
         </Row>
        :
        todos.map(todo => (
          <Card className="mx-5 mb-5 w-25" key={ todo.id }>
            <Card.Header className='text-center'>
              <Button className='badge badge-pill badge-danger' style={ todoCardStyle } onClick={() => openDeleteTodoDialog(todo)}>
                  <i className="fa fa-times"></i>
              </Button>
              { todo.title }
            </Card.Header>
            <Card.Body>
              <Card.Text>
              { t('priority') }: { PRIORITIES[todo.priority] }
              </Card.Text>
              <Card.Text>
              { t('description') }: { todo.description }
              </Card.Text>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-between">
              <Form.Check
                type='checkbox'
                id={'completed' + (todo.id)}
                label={ t('completed') }
                checked={ todo.completed }
                onChange={() => handleTodoCompletion(todo)} 
              />
              <Card.Link role="button" onClick={() => openUpdateTodoDialog(todo)}>
                <i className="fa fa-pencil mr-1"></i> { t('edit') }
              </Card.Link>
            </Card.Footer>
          </Card>
        ))
      }
      <Modal show={ todoModalVisibility }>
        <Modal.Header closeButton onHide={ closeTodoModal }>
            <Modal.Title>{ t('update_todo') }</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <UpdateTodo closeModal={ closeTodoModal } todo={ selectedTodo } />
        </Modal.Body>
      </Modal>
      <Modal show={ deleteTodoModalVisibility }>
        <Modal.Header closeButton onHide={ closeDeleteTodoModal }>
            <Modal.Title>{ t('delete_todo') }</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{ t('delete_todo_message') } <b>{ selectedTodo && selectedTodo.title }</b>?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="light" className="mx-2" onClick={ closeDeleteTodoModal }>{ t('translation:close') }</Button>
          <Button variant="danger" className="mx-2" onClick={ handleTodoDeleting }>{ t('translation:confirm') }</Button>
        </Modal.Footer>
      </Modal>
    </Row>
  );
}
  
export default TodoList;