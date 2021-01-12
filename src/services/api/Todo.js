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
}

export default new TodoService();