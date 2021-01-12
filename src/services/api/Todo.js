import HttpBaseClient from "../HttpBaseClient";

const ENDPOINTS = {
  TODOS: "/todos/"
};

class TodoService extends HttpBaseClient {
  getTodos = () => {
    return this.getApiClient().get(ENDPOINTS.TODOS);
  }

  createTodo = todo => {
    return this.getApiClient().post(ENDPOINTS.TODOS, todo);
  }

  updateTodo = todo => {
    return this.getApiClient().put(ENDPOINTS.TODOS + todo.id + '/', todo);
  }

  patchTodo = todo => {
    return this.getApiClient().patch(ENDPOINTS.TODOS + todo.id + '/', todo);
  }
}

export default new TodoService();