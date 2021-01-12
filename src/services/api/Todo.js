import HttpBaseClient from "../HttpBaseClient";

const ENDPOINTS = {
  TODOS: "/todos/"
};

class TodoService extends HttpBaseClient {
  getTodos = () => {
    return this.getApiClient().get(ENDPOINTS.TODOS);
  }
}

export default new TodoService();