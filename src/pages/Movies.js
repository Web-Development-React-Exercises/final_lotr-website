import React from "react";

import Header from "../components/Header";
import { useEffect, useState } from "react";

import getMovies from "../functions/getMovies";

export default function Movies() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getMovies().then((data) => {
            setMovies(data.docs);
        })
    }, [])


    return (
        <div>
            <Header />
            <div className="main">
                <h1 className="title">Movies</h1>
                <div className="movies">
                    {movies.map((movie) => {
                        /*
                        "budgetInMillions": 93,
      "boxOfficeRevenueInMillions": 871.5,
      "academyAwardNominations": 13,
      "academyAwardWins": 4,
      "rottenTomatoesScore": 91 */

                        return (
                            <div className="movieContainer">
                                <h2>{movie.name}</h2>
                                <p>{(movie.runtimeInMinutes / 60).toFixed(1)} Hours Long</p>
                                <p>{movie.budgetInMillions} Millions of dollars in budget</p>
                                <p>{movie.boxOfficeRevenueInMillions} Millions of dollars in revenue</p>
                                <p>{movie.academyAwardNominations} Academy Award Nominations</p>
                                <p>{movie.academyAwardWins} Academy Award Wins</p>
                                <p>{movie.rottenTomatoesScore} Rotten Tomatoes Score</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}