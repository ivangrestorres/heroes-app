import React from "react";
import "@testing-library/jest-dom";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { AppRouter } from "../../routers/AppRouter";
import { AuthContext } from "../../auth/AuthContext";
import { Navbar } from "../../components/ui/Navbar";

describe("Testing <AppRouter />", () => {
    const contextValue = {
        user: {
            logged: false,
        },
        dispatch: jest.fn(),
    };

    test("should show loggin if not authenticated", () => {
        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <AppRouter />
            </AuthContext.Provider>
        );

        expect(wrapper).toMatchSnapshot();
    });

    test("should show marvel page if authenticated", () => {
        const contextValue = {
            user: {
                name: "Ivan",
                logged: true,
            },
            dispatch: jest.fn(),
        };

        const wrapper = mount(
            <MemoryRouter>
                <AuthContext.Provider value={contextValue}>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        );

        expect(wrapper.find(Navbar).exists()).toBe(true);
    });
});
