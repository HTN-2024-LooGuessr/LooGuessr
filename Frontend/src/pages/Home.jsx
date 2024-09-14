import React from 'react';
import FriendList from "../Friends/Friends.jsx";
import SearchBar from '../SearchBar/searchbar.jsx';

export default function Home() {
    return (
        <>
            <SearchBar></SearchBar>
            <FriendList></FriendList>
        </>
    );
}