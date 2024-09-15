import React, {useEffect} from 'react'
import "../profile.css"
import {useNavigate} from "react-router-dom";

export default function Profile(props) {
    return (
        <div>
            <div className="header">
                <img className="profileImg" src={"https://www.imgonline.com.ua/examples/random-pixels-wallpaper-big.jpg"}></img>
                <div>
                    <pre className="name">Jonathan</pre>
                    <button onClick={props.logout()} className="logoutButton">
                        <pre className="logout">Logout</pre>
                    </button>
                </div>
            </div>
        </div>
        // <img/>
        // <button onClick={props.logout}>Logout</button>
    );
}