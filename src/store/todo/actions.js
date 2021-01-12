import { GET_TODOS, PUT_TODOS } from "./constants";

export const getTodos = () => ({
    type: GET_TODOS
});

export const putTodos = (payload) => ({
    type: PUT_TODOS,
    payload
});