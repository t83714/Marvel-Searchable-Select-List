import { OPTION_DATA_UPDATE } from "../actions/types";

export const init = function () {
    return [];
};

const initState = init();

function options(state = initState, action) {
    switch (action.type) {
    case OPTION_DATA_UPDATE: return action.payload;
    default: return state;
    }
}

export default options;
