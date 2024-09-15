import React from 'react';
import CameraComponent from "../Camera/CameraComponent";
import {useNavigate} from "react-router-dom";

export default function Photo(props) {
    if (localStorage.getItem("uid") == null && !window.location.pathname.includes("login")) {
        localStorage.setItem("points", "0");
        window.location.assign("/LooGuessr#/login");
    }
    
    return (
        <div>
            <CameraComponent></CameraComponent>
        </div>
    );
}