import React from "react";

import Header from "../components/Header";
import { useEffect, useState } from 'react';

import getBooks from '../functions/getBooks';
import getBookChapters from '../functions/getBookChapters';

export default function Books() {
    const [books, setBooks] = useState([]);

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
            {books.map(book => {
                var x = JSON.parse(JSON.stringify(books));
                console.log(x);

                return <div>
                    <h1>{book.name}</h1>
                    {book.chapters.map((chapter) => {
                        return <p>{chapter.chapterName}</p>
                    })}
                </div>
            })}
        </div>
    );
}