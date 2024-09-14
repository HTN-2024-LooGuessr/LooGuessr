import React from "react";
import "./Friends.css";

export default function FriendList() {
    //Query Friends from Server
    const friends = [ { username: "Saarujan Sathees", profileImg: "https://htmlcolorcodes.com/assets/images/colors/red-color-solid-background-1920x1080.png" } ];

    return (
        <div id="friendList"> 
            { friends.map(friend => <Friend imgSrc={friend.profileImg} key={"friend:" + friend.username} username={friend.username}></Friend>) } 
        </div>
    );
}

function Friend(props) {
    return (
        <button className="friend">
            <img className="profileImg" src={props.imgSrc}></img>
            <pre className="friendName">{props.username}</pre>
        </button>
    )
}