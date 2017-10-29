import {
    APP_INIT,
} from "./types";

export function appInit() {
    return {
        type: APP_INIT,
        payload: null,
    };
}