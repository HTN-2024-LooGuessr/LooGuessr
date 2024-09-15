import React, {useCallback, useState, useEffect} from "react";
import "./Friends.css";
import { handleMapGuess } from "./Friends";
import axios from "axios";
import Guess from ""

export default function Story() {
    async function onBack(ev) {
        const story = document.getElementById("story");
        story.style.opacity = "0";
        story.style.pointerEvents = "none";
        document.getElementById("navbar").style.opacity = 1;
        await new Promise(r => setTimeout(r, 500));
    }

    function onStorySwap(ev) {
        const map = document.getElementById("guessMap"), image = document.getElementById("storyImage"), 
                    switchIcon = document.getElementById("storySwapIcon");

        if (switchIcon.textContent == "person_pin_circle") {
            image.style.opacity = 0;
            image.style.pointerEvents = "none";

            map.style.opacity = 1;
            map.style.pointerEvents = "";

            switchIcon.textContent = "image";
            switchIcon.style.fontVariationSettings = "font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;";
            handleMapGuess();
        } else {
            map.style.opacity = 0;
            map.style.pointerEvents = "none";

            image.style.opacity = 1;
            image.style.pointerEvents = "";

            switchIcon.textContent = "person_pin_circle";
            switchIcon.style.fontVariationSettings = "font-variation-settings: 'FILL' 1, 'wght' 300, 'GRAD' 0, 'opsz' 24;";
        }
    }

    return (
        <div className="story" id="story" style={{backgroundColor: "red", opacity: 0, pointerEvents: "none" }}>
            <button id="backButton" className="storybutton" onClick={onBack}>
                <span id="backButtonIcon" className="material-symbols-rounded" style={{ width: "1.75vh", fontSize: "3.5vh" }}>arrow_back_ios</span>
            </button>
            <button id="storySwapButton" className="storyButton" onClick={onStorySwap}>
                <span id="storySwapIcon" className="material-symbols-rounded" style={{ fontSize: "4vh", fontVariationSettings: "'FILL' 1, 'wght' 300, 'GRAD' 0, 'opsz' 24;" }}>
                    image
                </span>
            </button>
            <div className="storyImage" style={{ backgroundColor: "green" }}></div>
            <Guess id="guessMap" style={{ pointerEvents: "none", opacity: "0", position: "absolute", top: 0, left: 0}}></Guess>
        </div>
    )
}