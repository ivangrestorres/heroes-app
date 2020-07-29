import React from "react";

export const LoginPage = ({ history }) => {
    const handleOnClick = () => {
        history.replace("/"); //Replace se debe utilizar si no queremos volver a atras en el history
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
