import React, { useMemo } from "react";
import queryString from "query-string";

import { heroes } from "../../data/heroes";
import { HeroCard } from "../heroes/HeroCard";
import { useForm } from "../../hooks/useForm";
import { useLocation } from "react-router-dom";
import { getHeroesByName } from "../../selectors/getHeroesByName";

export const SearchPage = ({ history }) => {
    const { search } = useLocation();
    const { q } = queryString.parse(search);

    const [{ searchText }, handleOnChange] = useForm({ searchText: q });

    const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);

    const handleOnSubmit = (e) => {
        e.preventDefault();
        history.push(`?q=${searchText}`);
    };

    return (
        <div>
            <h1>Search Page</h1>
            <hr />
            <div className="row">
                <div className="col-5">
                    <h4>Search Form</h4>
                    <hr />
                    <form onSubmit={handleOnSubmit}>
                        <input
                            type="text"
                            name="searchText"
                            placeholder="Find your hero"
                            onChange={handleOnChange}
                            value={searchText}
                            className="form-control"
                            autoComplete="off"
                        />
                        <button type="submit" className="btn btn-block btn-outline-primary mt-3">
                            Search...
                        </button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Results</h4>
                    <hr />
                    {q === "" && <div className="alert alert-info">Search a hero</div>}
                    {q !== "" && heroesFiltered.length == 0 && (
                        <div className="alert alert-danger">There is no a hero with {q}</div>
                    )}
                    {heroesFiltered.map((hero) => (
                        <HeroCard key={hero.id} {...hero} />
                    ))}
                </div>
            </div>
        </div>
    );
};
