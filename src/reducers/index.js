import combineReducers from "../common/combineReducers";
import optionsReducer, { init as optionDataInit } from "./options";
import {
    LOADING_ICON_STATUS_UPDATE,
    USER_INPUT_CHANGE,
} from "../actions/types";

export const init = function () {
    return {
        options: optionDataInit(),
        isLoadingIconShown: false,
        userInput: "",
    };
};

const AppInitState = init();

// eslint-disable-next-line no-unused-vars
const globalReducer = function (state = AppInitState, action) {
    switch (action.type) {
    case LOADING_ICON_STATUS_UPDATE:
        return {
            ...state,
            isLoadingIconShown: action.payload,
        };
    case USER_INPUT_CHANGE:
        return {
            ...state,
            userInput: action.payload,
        };
    default: return state;
    }
};


const combinedReducer = combineReducers({
    options: optionsReducer,
});

const AppReducer = function (state = AppInitState, action) {
    let newState = globalReducer(state, action);
    newState = combinedReducer(newState, action);
    return newState;
};

export default AppReducer;
