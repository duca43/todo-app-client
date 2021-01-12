export const putTodos = (state, payload) => ({
    ...state,
    todos: payload
});

export const putNewTodo = (state, payload) => ({
    ...state,
    todos: [...state.todos, payload]
});