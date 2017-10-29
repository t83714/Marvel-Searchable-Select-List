import { call, put } from "redux-saga/effects";
import { optionDataUpdate, loadingIconStatusUpdate } from "../actions";

function requestApi(input) {
    // eslint-disable-next-line no-undef
    if (jQuery.trim(input) === "") return [];
    // eslint-disable-next-line no-undef
    return jQuery.getJSON("http://localhost:1111/characters", {
        // eslint-disable-next-line no-undef
        nameStartsWith: jQuery.trim(input),
    }).then((res) => {
        if (!res || !res.results) throw new Error(`Invalid server response: ${res}`);
        return res.results;
    });
}

export default function* loadOptions({ payload }) {
    let options;
    try {
        yield put(loadingIconStatusUpdate(true));
        options = yield call(requestApi, payload);
    } catch (e) {
        // eslint-disable-next-line no-alert
        alert(`Failed to retrieve data from remote API: ${e.message}`);
        options = [];
    }
    try {
        yield put(loadingIconStatusUpdate(false));
        yield put(optionDataUpdate(options));
    } catch (e) {
        // eslint-disable-next-line no-alert
        alert(`Error: ${e.message}`);
    }
}

