import { useDispatch } from "react-redux";
import { updateTodo } from "../../store/todo/actions"
import TodoForm from "./TodoForm";

const UpdateTodo = ({ closeModal, todo }) => {

  const dispatch = useDispatch();

  const handleFormSubmit = (values) => {
    dispatch(
      updateTodo({
        id: todo.id,
        ...values,
        callback: () => {
          closeModal();
        }
      })
    );
  }

  return (
    <TodoForm closeModal={ closeModal } 
        initialValues={ todo }
        handleFormSubmit={ handleFormSubmit }
    />
  );
};
  
export default UpdateTodo;