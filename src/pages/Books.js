import React from "react";

import Header from "../components/Header";
import { useEffect, useState } from 'react';

import getBooks from '../functions/getBooks';
import getBookChapters from '../functions/getBookChapters';

export default function Books() {
    const [books, setBooks] = useState([]);
    const [viewed, setViewed] = useState(false);

    useEffect(() => {
        function fetchData() {
            getBooks()
                .then((data) => {
                    var booksArray = data.docs;

                    return Promise.all(booksArray.map((book) => {
                        return getBookChapters(book._id)
                            .then((data) => {
                                book.chapters = data.docs;
                                return book;
                            })
                    }))
                })
                .then((books) => {
                    setBooks(books);
                })
        }

        fetchData();
    }, []);

    return (
        <div>

            <Header />
            <div class="main">
                <div class="titles">
                    {books.map(book => {
                        var x = JSON.parse(JSON.stringify(books));
                        console.log(x);

                        return <div class="titleContainer">
                            <h1>{book.name}</h1>

                            <a href="#" onClick={() => setViewed(book)}>View Chapters</a>
                        </div>
                    })}
                </div>
                <div class="chaptersContainer">

                    {viewed && <div>
                        {viewed.chapters.map(chapters => {
                            return <p>{chapters.chapterName}</p>
                        })}
                    </div>}

                </div>
            </div>
        </div>
    );
}

