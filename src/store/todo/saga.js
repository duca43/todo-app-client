import { GET_TODOS, CREATE_TODO } from "./constants";
import { call, put, take } from "redux-saga/effects";
import { putTodos, putNewTodo } from "./actions"
import todoService from "../../services/api/Todo"

export function* getTodos() {
    yield take(GET_TODOS);
    const { data } = yield call(todoService.getTodos);
    yield put(putTodos(data));
}

export function* createTodo() {
    const { payload } = yield take(CREATE_TODO);
    const { data } = yield call(todoService.createTodo, payload);
    yield put(putNewTodo(data));
    payload.callback();
}

const todoSagas = [getTodos, createTodo];

export default todoSagas;