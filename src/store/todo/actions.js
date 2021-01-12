import { 
    GET_TODOS, 
    PUT_TODOS, 
    CREATE_TODO, 
    PUT_NEW_TODO, 
    UPDATE_TODO, 
    PUT_UPDATED_TODO, 
    PATCH_TODO
} from "./constants";

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

export const updateTodo = (payload) => ({
    type: UPDATE_TODO,
    payload
});

export const putUpdatedTodo = (payload) => ({
    type: PUT_UPDATED_TODO,
    payload
});

export const patchTodo = (payload) => ({
    type: PATCH_TODO,
    payload
});