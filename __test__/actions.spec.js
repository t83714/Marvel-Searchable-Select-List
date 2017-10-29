
import { appInit, userInputChange, loadingIconStatusUpdate, optionSelected } from "../src/actions";

describe(">>>A C T I O N --- Test appInit", () => {
    it("+++ actionCreator appInit", () => {
        const action = appInit();
        expect(action).toEqual({ type: "APP_INIT", payload: null });
    });

    it("+++ actionCreator userInputChange", () => {
        const action = userInputChange("abc");
        expect(action).toEqual({ type: "USER_INPUT_CHANGE", payload: "abc" });
    });

    it("+++ actionCreator optionSelected", () => {
        const action = optionSelected("232332");
        expect(action).toEqual({ type: "OPTION_SELECTED", payload: "232332" });
    });

    it("+++ actionCreator loadingIconStatusUpdate", () => {
        const action = loadingIconStatusUpdate(true);
        expect(action).toEqual({ type: "LOADING_ICON_STATUS_UPDATE", payload: true });
    });
});
//* ******************************************************************************************************
