import React, {useCallback, useEffect, useState} from 'react'
import {useNavigate} from "react-router-dom";
import axios from "axios";
import "../profile.css"

export default function Profile(props) {
    if (localStorage.getItem("uid") == null) window.location.assign("/LooGuessr#/login");
    
    const [friends, setFriends] = useState([])
    const loadFriends = useCallback(async () => {
        axios.get('https://looguessr.onrender.com/user/').then(res => {
            const uid = localStorage.getItem("uid");
            const processed = res.data.data.filter(f => f._id !== uid);
            console.log(res);
            setFriends(processed);
        })
    }, []);
    
    useEffect(() => {
        function logout() {
            localStorage.removeItem("username");
            localStorage.removeItem("uid");
            window.location.assign("/LooGuessr#/login");
        }

        document.getElementById("logoutButton").onclick = logout;
        async function sortLeaderboard() {
            await loadFriends();
            console.log("Friends: ", friends);
        }

        sortLeaderboard();
        const leaderboard = document.getElementById("leaderboard");
    }, [loadFriends])

    if (localStorage.getItem("uid") == null && !window.location.pathname.includes("login")) {
        localStorage.setItem("points", "0");
        window.location.assign("/login");
    }

    return (
        <div>
            <div className="header">
                <img className="profileImg" src={"https://www.imgonline.com.ua/examples/random-pixels-wallpaper-big.jpg"}></img>
                <pre className="name">{ localStorage.getItem("username") }</pre>
                <button id='logoutButton' className="logoutButton">
                    <span className="logout material-symbols-rounded">logout</span>
                </button>
            </div>
            <div style={{ display: "flex", position: "absolute", top: "25vh", width: "100vw", justifyContent: "center" }}>
                <pre id='pointDisplay'>{ `${+localStorage.getItem("points")} Points` }</pre>
            </div>
            <div id='leaderboard'></div>
        </div>
    );
}