import React from 'react';

import Header from '../components/Header';

export default function Home() {
    return (
        <div>
            <Header />
            <div className="main">
                <h1 className="title">Welcome</h1>
                <p className="mainText">Please use any of the available tools above</p>
            </div>
        </div>
    );
}