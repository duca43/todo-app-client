import { REGISTRATION } from "./constants";
import { call, take } from "redux-saga/effects";
import userService from "../../services/api/User";

export function* registration() {
    const { payload } = yield take(REGISTRATION);
    yield call(userService.registration, payload);
    payload.callback();
}

const userSagas = [registration];

export default userSagas;