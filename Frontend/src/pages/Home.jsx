import React, {useState} from 'react';
import FriendList from "../Friends/Friends.jsx";
import Story from "../Friends/Story.jsx"
import SearchBar from '../SearchBar/searchbar.jsx';
import PropTypes from "prop-types";
import {useNavigate} from "react-router-dom";

export default function Home(props) {
    const [searchParam, setSearchParam] = useState("");
    return (
        <>
            {/*<button onClick={props.logout}>Logout</button>*/}
            <SearchBar setSearchParam={setSearchParam}></SearchBar>
            <FriendList searchParam={searchParam}></FriendList>
            <Story></Story>
        </>
    );
}

Home.prototype = {
    logout: PropTypes.func
}