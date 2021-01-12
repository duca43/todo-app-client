import { GET_TODOS, PUT_TODOS, CREATE_TODO, PUT_NEW_TODO } from "./constants";

export const getTodos = () => ({
    type: GET_TODOS
});

export const putTodos = (payload) => ({
    type: PUT_TODOS,
    payload
});

export const createTodo = (payload) => ({
    type: CREATE_TODO,
    payload
});

export const putNewTodo = (payload) => ({
    type: PUT_NEW_TODO,
    payload
});