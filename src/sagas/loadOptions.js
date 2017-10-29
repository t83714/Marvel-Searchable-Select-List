import { call, put } from "redux-saga/effects";
import { optionDataUpdate, loadingIconStatusUpdate } from "../actions";

function requestApi(input) {
/*
    return [
          {
            "id": "1",
            "name": "Iron Man",
            "description": "Wounded, captured and forced to build a weapon by his enemies, billionaire industrialist Tony Stark instead created an advanced suit of armor to save his life and escape captivity. Now with a new outlook on life, Tony uses his money and intelligence to make the world a safer, better place as Iron Man.",
            "thumbnail": {
              "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/c0/527bb7b37ff55",
              "extension": "jpg"
            }
          }
        ];
*/
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
        yield put(optionDataUpdate(options));
        yield put(loadingIconStatusUpdate(false));
    } catch (e) {
        // eslint-disable-next-line no-alert
        alert(`Error: ${e.message}`);
    }
}

