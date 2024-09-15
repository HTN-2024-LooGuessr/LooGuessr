import React, {useCallback}from 'react';
import './CameraComponent.css';
import axios from "axios";

export default function CameraComponent() {
    async function capture() {
        const video = document.getElementById("cameraFeed") 
        const canvas = document.createElement("canvas");
        let data = {}
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        
        const context = canvas.getContext('2d');
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        
        //JONATHAN: Send the dataURL (image), and the username of the current account
        navigator.geolocation.getCurrentPosition(pos => {
            data = {
                image: canvas.toDataURL("image/jpeg"),
                latitude: pos.coords.latitude,
                longitude: pos.coords.longitude,
                altitude: pos.coords.altitude ? pos.coords.altitude : 0,
                // timestamp: pos.timestamp
                };
        })
        const loadImageInfo = async () => {
            axios.put(`http://localhost:5555/user/${localStorage.getItem("uid")}`, data)
                .then((res) => {
                    console.log("hi processed")
                    console.log(res)
                })
                .catch((error) => console.log(error))
        }

        loadImageInfo()
    };

    return (
        <>
            <video autoPlay playsInline id="cameraFeed"></video>
            <input id='shutter' onClick={capture} role='button' type='button' capture="camera"></input>
        </>
    );
};
