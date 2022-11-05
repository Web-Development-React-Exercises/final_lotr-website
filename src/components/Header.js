import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.png';

export default function Header() {
    return (
        <header id="header">
            <div className="logo"><img src={logo} alt="Page logo" /></div>
            <ul class="headerLinkContainer">
                <li class="headerLink"><Link to="/">Home</Link></li>
                <li class="headerLink"><Link to="/books">Books</Link></li>
                <li class="headerLink"><Link to="/movies">Movies</Link></li>
                <li class="headerLink"><Link to="/quotes">Quotes</Link></li>
                <li class="headerLink"><Link to="/characters">Characters</Link></li>
                <li class="headerLink"><Link to="/about">About</Link></li>
            </ul>
        </header>
    );
}