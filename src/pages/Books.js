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
                <div className="title">Books and Chapters</div>
                <div className="titleChapterContainer">
                    <div>
                        <div class="titles">
                            {books.map(book => {
                                return <div class="titleContainer">
                                    <h1>{book.name}</h1>

                                    <button onClick={() => setViewed(book)}>View Chapters</button>
                                </div>
                            })}
                        </div>
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
        </div>
    );
}

