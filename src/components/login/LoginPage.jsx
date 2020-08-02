import React, { useContext } from "react";
import { AuthContext } from "../../auth/AuthContext";
import { types } from "../../types/types";

export const LoginPage = ({ history }) => {
    const { dispatch } = useContext(AuthContext);

    const handleOnClick = () => {
        const lastPath = localStorage.getItem("lastpath") || "/";
        dispatch({
            type: types.login,
            payload: {
                name: "Ivan",
            },
        });

        history.replace(lastPath); //Replace se debe utilizar si no queremos volver a atras en el history
    };
    return (
        <div className={"container mt-5"}>
            <h1>Login Page</h1>
            <hr />
            <button className={"btn btn-primary"} onClick={handleOnClick}>
                Login
            </button>
        </div>
    );
};
