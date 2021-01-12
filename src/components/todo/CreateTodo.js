import { useDispatch } from "react-redux";
import { createTodo } from "../../store/todo/actions"
import TodoForm from "./TodoForm";

const initialValues = {
  title: '',
  description: '',
  priority: 'NP',
  completed: false
};

const CreateTodo = ({ closeModal }) => {

  const dispatch = useDispatch();

  const handleFormSubmit = (values) => {
    dispatch(
      createTodo({
        ...values,
        callback: () => {
          closeModal();
        }
      })
    );
  }

  return (
    <TodoForm closeModal={ closeModal } 
        initialValues={ initialValues }
        handleFormSubmit={ handleFormSubmit }
    />
  );
};
  
export default CreateTodo;