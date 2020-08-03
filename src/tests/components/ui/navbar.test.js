import React from "react";
import "@testing-library/jest-dom";
import { mount } from "enzyme";
import { AuthContext } from "../../../auth/AuthContext";
import { Navbar } from "../../../components/ui/Navbar";
import { MemoryRouter, Router } from "react-router-dom";
import { types } from "../../../types/types";

describe("Testing <Navbar />", () => {
    const historyMock = {
        listen: jest.fn(),
        push: jest.fn(),
        replace: jest.fn(),
        createHref: jest.fn(),
        location: {},
    };

    const contextValue = {
        user: {
            logged: true,
            name: "Ivan",
        },
        dispatch: jest.fn(),
    };

    const wrapper = mount(
        <AuthContext.Provider value={contextValue}>
            <MemoryRouter>
                <Router history={historyMock}>
                    <Navbar />
                </Router>
            </MemoryRouter>
        </AuthContext.Provider>
    );

    afterEach(() => {
        jest.clearAllMocks();
    });

    test("should show correct", () => {
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find(".text-info").text().trim()).toBe(contextValue.user.name);
    });

    test("should call logout and history", () => {
        wrapper.find("button").simulate("click");
        expect(contextValue.dispatch).toHaveBeenCalledWith({
            type: types.logout,
        });
        expect(historyMock.replace).toHaveBeenLastCalledWith("/login");
    });
});
