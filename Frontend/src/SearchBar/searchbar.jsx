import './searchbar.css'
import axios from "axios";
import FriendList from "../Friends/Friends.jsx";


export default function SearchBar(props) {
    function onSearch(ev = new InputEvent()) {
        const search = document.getElementById('searchbar').value;
        props.setSearchParam(search)
    }
    return (
        <>
            <input id='searchbar' autoCapitalize='none' onKeyUp={onSearch}></input>
            <span id='searchbutton' className='material-symbols-rounded'>search</span>
        </>
    );
}