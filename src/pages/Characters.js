import React from "react";

import Header from "../components/Header";
import { useEffect, useState } from "react";

import getCharacters from "../functions/getCharacters";

export default function Characters() {
    const [characters, setCharacters] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        getCharacters().then((data) => {
            setCharacters(data.docs);
        })
    }, [])

    return (
        <div>
            <Header />
            <div className="main center">
                <h1 className="title">Characters</h1>
                <input className="input" type="text" placeholder="Search" onChange={(e) => setSearchTerm(e.target.value)} />
                <div className="characters">
                    {characters.filter((char)=>{
                        if(searchTerm == ""){
                            return char;
                        }else if(char.name.toLowerCase().includes(searchTerm.toLowerCase())){
                            return char;
                        }
                    }).map((char) => {
                        return (
                            <div className="characterContainer">
                                <h2>{char.name}</h2>
                                <p>{char.race}</p>
                                <p>{char.gender}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}