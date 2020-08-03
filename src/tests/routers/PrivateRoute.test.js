import React from "react";
import { mount } from "enzyme";
import { PrivateRoute } from "../../routers/PrivateRoute";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";

describe("Testing <PrivateRoute />", () => {
    const props = {
        location: {
            pathname: "/",
        },
    };

    Storage.prototype.setItem = jest.fn();

    test("should show component if isAuthenticated and save localStorage", () => {
        // Tenemos que utilizar mount porque al tener el <MemoryRouter /> no podriamos ver el span
        const wrapper = mount(
            <MemoryRouter>
                <PrivateRoute isAuthenticated={true} component={() => <span>Listo!</span>} {...props} />
            </MemoryRouter>
        );
        expect(wrapper.find("span").exists()).toBe(true);
        expect(localStorage.setItem).toHaveBeenCalledWith("lastpath", "/");
    });

    test("should block component if not authenticated", () => {
        const wrapper = mount(
            <MemoryRouter>
                <PrivateRoute isAuthenticated={false} component={() => <span>Listo!</span>} {...props} />
            </MemoryRouter>
        );
        expect(wrapper.find("span").exists()).toBe(false);
    });
});
