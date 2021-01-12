export const putTodos = (state, payload) => ({
    ...state,
    todos: payload
});

export const putNewTodo = (state, payload) => ({
    ...state,
    todos: [...state.todos, payload]
});

export const putUpdatedTodo = (state, payload) => ({
    ...state,
    todos: state.todos.map(todo => todo.id === payload.id ? payload : todo)
});

export const deleteTodoById = (state, id) => ({
    ...state,
    todos: state.todos.filter(todo => todo.id !== id)
});