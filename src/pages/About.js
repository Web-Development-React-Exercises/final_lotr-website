import React from "react";

import Header from "../components/Header";

export default function About() {
    return (
        <div>
            <Header />
            <div className="main center">
                <h1 className="title">About</h1>
                <div className="about">
                    <p>This is a fairly simple page I made to test The One API and also as my final assignment for my Web Development course.</p>
                    <p>The repository can be found at</p>
                    <a href="https://github.com/Web-Development-React-Exercises/final_lotr-website">Github</a>
                    <p>Any inquiries about the page please send them to anibaldonoso1@gmail.com</p>
                    <p>Special Thanks to The One API for providing its service free of charge, the API can be found here:</p>
                    <a href="https://the-one-api.dev">The One API</a>
                </div>
            </div>
        </div>
    );
}