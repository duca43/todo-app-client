import { GET_TODOS } from "./constants";
import { call, put, take } from "redux-saga/effects";
import { putTodos } from "./actions"
import todoService from "../../services/api/Todo"

export function* getTodos() {
    yield take(GET_TODOS);
    const { data } = yield call(todoService.getTodos);
    yield put(putTodos(data));
}

const todoSagas = [getTodos];

export default todoSagas;