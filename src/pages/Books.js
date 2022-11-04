import React from "react";

import Header from "../components/Header";
import { useEffect, useState } from 'react';

import getBooks from '../functions/getBooks';

export default function Books() {
    
    const [books, setBooks] = useState([]);

    useEffect(() => {
        getBooks().then((data) => {
            setBooks(data.docs);
            console.log(books);
        });
    }, []);

    return (
        <div>
            <Header />
            {books.map(books=>
                <div>
                    <h1>{books.name}</h1>
                </div>
            )}
        </div>
    );
}