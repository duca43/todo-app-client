import { PUT_TODOS } from '../constants';
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
  [PUT_TODOS]: updateStateFunctions.putTodos
};

export default todoReducer;