import "@testing-library/jest-dom";
import { authReducer } from "../../auth/authReducer";
import { types } from "../../types/types";

describe("Testing authReducer", () => {
    test("should return default value", () => {
        const obj = { name: "Ivan" };
        const state = authReducer(obj, {});
        expect(state).toEqual(obj);
    });

    test("should authenticate user", () => {
        const newUser = { name: "Ivan" };
        const state = authReducer({}, { type: types.login, payload: newUser });
        expect(state).toEqual({ name: "Ivan", logged: true });
    });

    test("should logout", () => {
        const obj = { name: "Ivan", logged: true };
        const state = authReducer(obj, { type: types.logout });
        expect(state.logged).toBe(false);
    });
});
