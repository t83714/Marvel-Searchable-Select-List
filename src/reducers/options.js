import { OPTION_DATA_UPDATE, OPTION_SELECTED } from "../actions/types";

export const init = function () {
    return [];
};

const initState = init();

function options(state = initState, action) {
    switch (action.type) {
    case OPTION_DATA_UPDATE: return action.payload;
    case OPTION_SELECTED: return state.map(item => (item.id === action.payload ? { ...item, isActive: true } : { ...item, isActive: false }));
    default: return state;
    }
}

export default options;
