import React, {useEffect} from 'react'
import {useNavigate} from "react-router-dom";
import "../profile.css"

export default function Profile(props) {
    if (localStorage.getItem("uid") == null) window.location.assign("/LooGuessr/login");

    useEffect(() => {
        function logout() {
            localStorage.removeItem("username");
            localStorage.removeItem("uid");
            window.location.assign("/LooGuessr/login");
        }

        document.getElementById("logoutButton").onclick = logout;
    })

    return (
        <div>
            <div className="header">
                <img className="profileImg" src={"https://www.imgonline.com.ua/examples/random-pixels-wallpaper-big.jpg"}></img>
                <pre className="name">{ localStorage.getItem("username") }</pre>
                <button id='logoutButton' className="logoutButton">
                    <span className="logout material-symbols-rounded">logout</span>
                </button>
            </div>
        </div>
    );
}