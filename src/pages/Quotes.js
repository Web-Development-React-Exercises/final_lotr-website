import React from "react";

import Header from "../components/Header";
import { useEffect, useState } from "react";

import getQuotes from "../functions/getQuotes";

export default function Quotes() {
    const [quotes, setQuotes] = useState([]);
    const [displayedQuote, setDisplayedQuote] = useState("Click me to get a random quote");
    const [loadingQuotes, setLoadingQuotes] = useState(true);

    useEffect(() => {
        getQuotes().then((data) => {
            setQuotes(data.docs);
            setLoadingQuotes(false);
        })
    }, [])

    function setRandomQuote() {
        setDisplayedQuote(quotes[Math.floor(Math.random() * quotes.length)].dialog);
    }

    return (
        <div>
            <Header />
            <div className="main center">
                <h1 className="title">Random Quote</h1>
                {loadingQuotes ? <h1>Loading...</h1> :
                    <div className="quote center">
                        <div className="quoteContainer" onClick={() => setRandomQuote()}>
                            <h1>{displayedQuote}</h1>
                        </div>
                        <button className="copy" onClick={() => {navigator.clipboard.writeText(displayedQuote)}}>Copy text</button>
                    </div>
                }
            </div>
        </div>
    );
}