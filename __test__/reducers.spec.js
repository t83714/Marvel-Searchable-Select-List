import React from "react";
import { shallow, mount } from "enzyme";
import renderer from "react-test-renderer";

import appReducers, { init as appInit } from "../src/reducers";

describe(">>>R E D U C E R --- Test appReducers", () => {
    it("+++ reducer for LOADING_ICON_STATUS_UPDATE", () => {
        let state = appInit();
        state = appReducers(state, { type: "LOADING_ICON_STATUS_UPDATE", payload: true });
        expect(state.isLoadingIconShown).toEqual(true);
    });
    it("+++ reducer for OPTION_SELECTED", () => {
        let state = appInit();
        state.options = [
            {
                id: "123",
                name: "Iron Man",
                description: "Wounded, captured and forced to build a weapon by his enemies, billionaire industrialist Tony Stark instead created an advanced suit of armor to save his life and escape captivity. Now with a new outlook on life, Tony uses his money and intelligence to make the world a safer, better place as Iron Man.",
                thumbnail: {
                    path: "http://i.annihil.us/u/prod/marvel/i/mg/9/c0/527bb7b37ff55",
                    extension: "jpg",
                },
            },
            {
                id: "89798",
                name: "Iron Man",
                description: "Wounded, captured and forced to build a weapon by his enemies, billionaire industrialist Tony Stark instead created an advanced suit of armor to save his life and escape captivity. Now with a new outlook on life, Tony uses his money and intelligence to make the world a safer, better place as Iron Man.",
                thumbnail: {
                    path: "http://i.annihil.us/u/prod/marvel/i/mg/9/c0/527bb7b37ff55",
                    extension: "jpg",
                },
            },
            {
                id: "233",
                name: "Iron Man",
                description: "Wounded, captured and forced to build a weapon by his enemies, billionaire industrialist Tony Stark instead created an advanced suit of armor to save his life and escape captivity. Now with a new outlook on life, Tony uses his money and intelligence to make the world a safer, better place as Iron Man.",
                thumbnail: {
                    path: "http://i.annihil.us/u/prod/marvel/i/mg/9/c0/527bb7b37ff55",
                    extension: "jpg",
                },
            },
        ];
        state = appReducers(state, { type: "OPTION_SELECTED", payload: "89798" });
        expect(state.options[1].isActive).toEqual(true);
    });
});
//* ******************************************************************************************************
