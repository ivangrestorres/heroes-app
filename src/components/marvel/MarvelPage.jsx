import React from "react";
import { HeroList } from "../heroes/HeroList";

export const MarvelPage = () => {
    return (
        <>
            <h1>Marvel Page</h1>
            <hr />
            <HeroList publisher={"Marvel Comics"}></HeroList>
        </>
    );
};
