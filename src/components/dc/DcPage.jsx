import React from "react";
import { HeroList } from "../heroes/HeroList";

export const DcPage = () => {
    return (
        <>
            <h1>DC Page</h1>
            <hr />
            <HeroList publisher={"DC Comics"}></HeroList>
        </>
    );
};
