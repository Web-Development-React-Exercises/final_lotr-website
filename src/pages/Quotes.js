import React from "react";

import Header from "../components/Header";
import { useEffect, useState } from "react";

import getQuotes from "../functions/getQuotes";

import getMovies from "../functions/getMovies";

import getMovieById from "../functions/getMovieById";
import getCharacterById from "../functions/getCharacterById";

export default function Quotes() {
    const [quotes, setQuotes] = useState([]);
    const [displayedQuote, setDisplayedQuote] = useState(false);
    const [loadingQuotes, setLoadingQuotes] = useState(true);

    const [characters, setCharacters] = useState([]);
    const [movies, setMovies] = useState([]);

    const [character, setCharacter] = useState("");
    const [movie, setMovie] = useState("");

    useEffect(() => {

        Promise.allSettled([
            getQuotes(),
            getMovies()
        ])
            .then((data) => {
                setQuotes(data[0].value.docs);
                setMovies(data[1].value.docs);
                setLoadingQuotes(false);
            })
    }, [])

    function setRandomQuote() {
        setDisplayedQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    }

    useEffect(() => {

        //Look trough movies and return the movie that matches the movie id
        // const foundMovie = movies.find(obj => obj._id === displayedQuote.movie)
        // console.log(movies)
        // console.log(displayedQuote.movie);
        // console.log(foundMovie);
        // setMovie(foundMovie);

        getCharacterById(displayedQuote.character).then((data) => {
            setCharacter(data.docs[0]);
            console.log(character);
        })
        getMovieById(displayedQuote.movie).then((data) => {
            setMovie(data.docs[0]);
            console.log(movie);
        })
    }, [displayedQuote])


    return (
        <div>
            <Header />
            <div className="main center">
                <h1 className="title">Random Quote</h1>
                {loadingQuotes ? <h1>Loading...</h1> :
                    <div className="quote">
                        <div className="quoteContainer">
                            <h1>{displayedQuote.dialog}</h1>
                        </div>
                        <div className="buttonContainer">
                            <button className="styledButton" onClick={() => setRandomQuote()} >Get a quote</button>
                            <button className="styledButton" onClick={() => { navigator.clipboard.writeText(displayedQuote) }}>Copy text</button>
                        </div>
                    </div>
                }
                {displayedQuote !== false &&
                    <div className="quoteInfo">
                        <h2>Character: {character.name}</h2>
                        <h2>Movie: {movie.name}</h2>
                    </div>
                }
            </div>
        </div>
    );
}