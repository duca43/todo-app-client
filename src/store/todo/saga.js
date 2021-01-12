import { GET_TODOS, CREATE_TODO, UPDATE_TODO, PATCH_TODO } from "./constants";
import { call, put, take } from "redux-saga/effects";
import { putTodos, putNewTodo, putUpdatedTodo } from "./actions"
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

export function* updateTodo() {
    const { payload } = yield take(UPDATE_TODO);
    const { data } = yield call(todoService.updateTodo, payload);
    yield put(putUpdatedTodo(data));
    payload.callback();
}

export function* patchTodo() {
    const { payload } = yield take(PATCH_TODO);
    const { data } = yield call(todoService.patchTodo, payload);
    yield put(putUpdatedTodo(data));
}

const todoSagas = [getTodos, createTodo, updateTodo, patchTodo];

export default todoSagas;