import { takeEvery, takeLatest } from "redux-saga/effects";
import { USER_INPUT_CHANGE } from "../actions/types";
import loadOptions from "./loadOptions";

// eslint-disable-next-line no-unused-vars
function* AppSaga(store) {
    yield takeLatest(USER_INPUT_CHANGE, loadOptions);
}

export default AppSaga;
