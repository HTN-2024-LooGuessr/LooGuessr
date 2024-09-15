import React from 'react';
import CameraComponent from "../Camera/CameraComponent";
import {useNavigate} from "react-router-dom";

export default function Photo(props) {
    return (
        <div>
            <CameraComponent></CameraComponent>
        </div>
    );
}