import React from "react";
import styles from "./Friends.module.css";
import GuessButton from "../GuessButton/GuessButton.jsx";
import ProfileImg from "../ProfileImg/ProfileImg.jsx";

export default function Friends() {
    return (
        <div>
            {/*have flex box?*/}
            <ProfileImg></ProfileImg>
            <div>
                <p> HIHIHIHIHIHIHIHI</p>
            </div>
            <GuessButton></GuessButton>
        </div>);
}