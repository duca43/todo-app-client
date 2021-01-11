import { REGISTRATION, LOGIN, LOGOUT} from "./constants";
import { call, put, take } from "redux-saga/effects";
import userService from "../../services/api/User";
import { putLoggedUser } from "./actions"

export function* registration() {
    const { payload } = yield take(REGISTRATION);
    yield call(userService.registration, payload);
    payload.callback();
}

export function* login() {
    const { payload } = yield take(LOGIN);
    const data = yield call(userService.login, payload);
    yield put(putLoggedUser(data));
    payload.callback();
}

export function* logout() {
    const { payload } = yield take(LOGOUT);
    localStorage.removeItem('username');
    localStorage.removeItem('userId');
    localStorage.removeItem('token');
    yield put(putLoggedUser({}));
    payload.callback();
}

const userSagas = [registration, login, logout];

export default userSagas;