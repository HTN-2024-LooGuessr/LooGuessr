import React from 'react';
import Friends from "../Friends/Friends.jsx";
import SearchBar from '../SearchBar/searchbar.jsx';

export default function Home() {
    return (
        <div>
            <SearchBar></SearchBar>
            <Friends></Friends>
        </div>
    );
}