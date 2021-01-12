import { all, spawn, call } from "redux-saga/effects";
import userSagas from "./user/saga";
import todoSagas from "./todo/saga"

export default function* rootSaga() {
  const sagas = [...userSagas, ...todoSagas];

  yield all(sagas.map(saga =>
    spawn(function* () {
      while (true) {
        try {
          yield call(saga)
        } catch (e) {
          console.log(e)
        }
      }
    }))
  );
}
