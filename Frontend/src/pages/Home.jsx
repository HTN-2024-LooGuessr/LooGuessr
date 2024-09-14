import React, {useState} from 'react';
import FriendList from "../Friends/Friends.jsx";
import SearchBar from '../SearchBar/searchbar.jsx';
import PropTypes from "prop-types";

export default function Home(props) {
    const [searchParam, setSearchParam] = useState("");
    return (
        <>
            <button onClick={props.logout}>Logout</button>
            <SearchBar setSearchParam={setSearchParam}></SearchBar>
            <FriendList searchParam={searchParam}></FriendList>
        </>
    );
}

Home.prototype = {
    logout: PropTypes.func
}