import React from "react";

import 'core-js/es6/map';
import 'core-js/es6/set';

import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { shallow, mount } from "enzyme";
import renderer from "react-test-renderer";
import ConnectedSearchBox, { SearchBox } from "../src/views/SearchBox";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";

import { optionDataUpdate, loadingIconStatusUpdate, optionSelected } from "../src/actions";
import { createStore } from "redux";
import appReducers, { init as appInit } from "../src/reducers";

const raf = global.requestAnimationFrame = function (callback) {
    setTimeout(callback, 0);
};

configure({ adapter: new Adapter() });

// Snapshot for SelectBox Component
describe(">>>SearchBox --- Snapshot", () => {
    it("+++capturing Snapshot of SearchBox", () => {
        const state = appInit();
        state.options = [
            {
                id: "123",
                name: "Iron Man 1",
                description: "sdfsa wsdfonaire industrialisdsfinstead created an advanced suit of armor to save his life and escape captivity. Now with a new outlook on life, Tony uses his money and intelligence to make the world a safer, better place as Iron Man.",
                thumbnail: {
                    path: "http://i.annihil.us/u/prod/marvel/i/mg/9/c0/527bb7b37ff55",
                    extension: "jpg",
                },
            },
            {
                id: "89798",
                name: "Iron Man 2",
                description: "Wousdfred and forceddf by his enemies, billionaire industrialist Tony Stark instead created an advanced suit of armor to save his life and escape captivity. Now with a new outlook on life, Tony uses his money and intelligence to make the world a safer, better place as Iron Man.",
                thumbnail: {
                    path: "http://i.annihil.us/u/prod/marvel/i/mg/9/c0/527bb7b37ff55",
                    extension: "jpg",
                },
            },
            {
                id: "233",
                name: "Iron Man 3",
                description: "Wousdfdred and forced tosdfis enemies, billionaire industrialist Tony Stark instead created an advanced suit of armor to save his life and escape captivity. Now with a new outlook on life, Tony uses his money and intelligence to make the world a safer, better place as Iron Man.",
                thumbnail: {
                    path: "http://i.annihil.us/u/prod/marvel/i/mg/9/c0/527bb7b37ff55",
                    extension: "jpg",
                },
            },
        ];
        const renderedValue = renderer.create(<SearchBox {...state} />).toJSON();
        expect(renderedValue).toMatchSnapshot();
    });
});
//* ******************************************************************************************************
describe(">>>SearchBox--- Shallow Render REACT COMPONENTS", () => {
    let wrapper;
    const state = appInit();

    beforeEach(() => {
        wrapper = shallow(<SearchBox {...state} />);
    });

    it("+++ render the DUMB component", () => {
        expect(wrapper.length).toEqual(1);
    });

    it("+++ contains input", () => {
        expect(wrapper.find("input").length).toBe(1);
    });
});


//* ******************************************************************************************************
describe(">>>SearchBox --- REACT-REDUX (Shallow + passing the {store} directly)", () => {
    const initialState = appInit();
    const mockStore = configureStore();
    let store,
        container;

    beforeEach(() => {
        store = mockStore(initialState);
        container = shallow(<ConnectedSearchBox store={store} />);
    });

    it("+++ render the connected(SMART) component", () => {
        expect(container.length).toEqual(1);
    });

    it("+++ check Prop matches with initialState", () => {
        expect(container.prop("isLoadingIconShown")).toEqual(initialState.isLoadingIconShown);
    });
});

//* ******************************************************************************************************
describe(">>>SearchBox --- REACT-REDUX (Mount + wrapping in <Provider>)", () => {
    const initialState = appInit();
    const mockStore = configureStore();
    let store,
        wrapper;

    beforeEach(() => {
        store = mockStore(initialState);
        wrapper = mount(<Provider store={store}><ConnectedSearchBox /></Provider>);
    });

    it("+++ contains input", () => {
        expect(wrapper.find("input").length).toBe(1);
    });

    it("+++ render the connected(SMART) component", () => {
        expect(wrapper.find(ConnectedSearchBox).length).toEqual(1);
    });

    it("+++ check Prop matches with initialState", () => {
        expect(wrapper.find(SearchBox).prop("isLoadingIconShown")).toEqual(initialState.isLoadingIconShown);
    });

    it("+++ check action on dispatching ", () => {
        let action;
        store.dispatch(loadingIconStatusUpdate(true));
        store.dispatch(optionSelected("32332"));
        action = store.getActions();
        expect(action[0].type).toBe("LOADING_ICON_STATUS_UPDATE");
        expect(action[1].type).toBe("OPTION_SELECTED");
    });
});

//* ******************************************************************************************************
describe(">>>SearchBox --- REACT-REDUX (actual Store + reducers) more of Integration Testing", () => {
    const initialState = appInit();
    let store,
        wrapper;

    beforeEach(() => {
        store = createStore(appReducers);
        wrapper = mount(<Provider store={store}><ConnectedSearchBox /></Provider>);
    });

    it("+++ check Prop matches with initialState", () => {
        store.dispatch(loadingIconStatusUpdate(true));
        expect(wrapper.find(SearchBox).length).toBe(1);
    });
});
//* ******************************************************************************************************
