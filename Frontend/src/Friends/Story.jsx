import React, {useCallback, useState, useEffect} from "react";
import "./Friends.css";
import { handleMapGuess } from "./Friends";
import axios from "axios";
import Guess from "../Guess/Guess"

export default function Story() {
    async function onBack(ev) {
        const story = document.getElementById("story");
        story.style.opacity = "0";
        story.style.pointerEvents = "none";
        document.getElementById("navbar").style.opacity = 1;
        await new Promise(r => setTimeout(r, 500));
    }

    function onStorySwap(ev) {
        console.log("Swapping Story")
        const map = document.getElementById("guessMap"), image = document.getElementById("storyImage"), 
                    switchIcon = document.getElementById("storySwapIcon"), 
                    mapControls = document.getElementById("guessMapControls");

        if (switchIcon.textContent == "person_pin_circle") {
            image.style.visibility = "hidden";
            image.style.pointerEvents = "none";

            map.style.visibility = "";
            map.style.pointerEvents = "";
            
            if (mapControls) {
                mapControls.style.visibility = "";
                mapControls.style.pointerEvents = "";
            }

            switchIcon.textContent = "image";
            switchIcon.style.fontVariationSettings = "font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24";
            handleMapGuess();
        } else {
            map.style.visibility = "hidden";
            map.style.pointerEvents = "none";
            
            if (mapControls) {
                mapControls.style.visibility = "hidden";
                mapControls.style.pointerEvents = "none";
            }

            image.style.visibility = "";
            image.style.pointerEvents = "";

            switchIcon.textContent = "person_pin_circle";
            switchIcon.style.fontVariationSettings = "font-variation-settings: 'FILL' 1, 'wght' 300, 'GRAD' 0, 'opsz' 24";
        }
    }

    return (
        <div className="story" id="story" style={{ backgroundColor: "red", opacity: 0, pointerEvents: "none" }}>
            <button id="backButton" className="storybutton" onClick={onBack}>
                <span id="backButtonIcon" className="material-symbols-rounded" style={{ width: "1.75vh", fontSize: "3.5vh" }}>arrow_back_ios</span>
            </button>
            <button id="storySwapButton" className="storyButton" onClick={onStorySwap}>
                <span id="storySwapIcon" className="material-symbols-rounded" style={{ fontSize: "4vh", fontVariationSettings: "'FILL' 1, 'wght' 300, 'GRAD' 0, 'opsz' 24" }}>
                    person_pin_circle
                </span>
            </button>
            <div className="storyImage" id="storyImage" style={{ backgroundColor: "green" }}></div>
            <Guess></Guess>
        </div>
    )
}