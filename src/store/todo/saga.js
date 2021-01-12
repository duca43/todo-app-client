import { 
    GET_TODOS,
    CREATE_TODO,
    UPDATE_TODO,
    PATCH_TODO,
    DELETE_TODO } from "./constants";
import { call, put, take } from "redux-saga/effects";
import { putTodos, putNewTodo, putUpdatedTodo, deleteTodoById } from "./actions"
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

export function* deleteTodo() {
    const { payload } = yield take(DELETE_TODO);
    yield call(todoService.deleteTodo, payload);
    yield put(deleteTodoById(payload.id));
    payload.callback();
}

const todoSagas = [getTodos, createTodo, updateTodo, patchTodo, deleteTodo];

export default todoSagas;