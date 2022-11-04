import React from "react";

import Header from "../components/Header";
import { useEffect, useState } from 'react';

import getBooks from '../functions/getBooks';
import getBookChapters from '../functions/getBookChapters';

export default function Books() {
    const [books, setBooks] = useState([]);

    useEffect(async () => {
        //On page load, get all books from API
        var booksArray = await getBooks().then((data) => {
            const response = data.docs
            return response;
        }).catch((error) => {
            console.log(error);
        });

        setBooks(data);
     
    }, []);

    return (
        <div>
            <Header />
            {books.map(book => {
                var x =JSON.parse(JSON.stringify(book));
                console.log(x);

                return <div>
                    <h1>{book.name}</h1>
                </div>
            })}
        </div>
    );
}