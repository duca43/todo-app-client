import { all, spawn, call } from "redux-saga/effects";
import userSagas from "./user/saga";

export default function* rootSaga() {
  const sagas = [...userSagas];

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
