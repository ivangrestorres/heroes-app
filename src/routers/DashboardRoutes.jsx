import React from "react";
import { Navbar } from "../components/ui/Navbar";
import { Switch, Route, Redirect } from "react-router-dom";
import { DcPage } from "../components/dc/DcPage";
import { MarvelPage } from "../components/marvel/MarvelPage";
import { HeroPage } from "../components/heroes/HeroPage";

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className={"container mt-2"}>
                <Switch>
                    <Route exact path="/marvel" component={MarvelPage} />
                    <Route exact path="/heroe/:heroeId" component={HeroPage} />
                    <Route exact path="/dc" component={DcPage} />
                    <Redirect to="/marvel" />
                </Switch>
            </div>
        </>
    );
};
