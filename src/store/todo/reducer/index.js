import { PUT_TODOS, PUT_NEW_TODO, PUT_UPDATED_TODO } from '../constants';
import * as updateStateFunctions from './update-state-functions';

const initialState = {
  todos: []
};

const todoReducer = (state = initialState, { type, payload }) => {
  if (actionHandler.hasOwnProperty(type)) {
    return actionHandler[type](state, payload);
  }

  return state;
};

const actionHandler = {
  [PUT_TODOS]: updateStateFunctions.putTodos,
  [PUT_NEW_TODO]: updateStateFunctions.putNewTodo,
  [PUT_UPDATED_TODO]: updateStateFunctions.putUpdatedTodo
};

export default todoReducer;