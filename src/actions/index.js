import {
    APP_INIT,
    USER_INPUT_CHANGE,
    OPTION_DATA_UPDATE,
    LOADING_ICON_STATUS_UPDATE,
    OPTION_SELECTED,
} from "./types";

export function appInit() {
    return {
        type: APP_INIT,
        payload: null,
    };
}

export function userInputChange(inputValue) {
    return {
        type: USER_INPUT_CHANGE,
        payload: inputValue,
    };
}

export function optionDataUpdate(options) {
    return {
        type: OPTION_DATA_UPDATE,
        payload: options,
    };
}

export function loadingIconStatusUpdate(status) {
    return {
        type: LOADING_ICON_STATUS_UPDATE,
        payload: status,
    };
}

export function optionSelected(id) {
    return {
        type: OPTION_SELECTED,
        payload: id,
    };
}
