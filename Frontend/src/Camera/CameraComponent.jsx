import React from 'react';
import './CameraComponent.css';

export default function CameraComponent() {
    async function capture() {
        const video = document.getElementById("cameraFeed") 
        const canvas = document.createElement("canvas");
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        
        const context = canvas.getContext('2d');
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        
        //JONATHAN: Send the dataURL (image), and the username of the current account
        navigator.geolocation.getCurrentPosition(pos => {
            const data = {
                account: localStorage.getItem("accountID or whatever"),
                image: canvas.toDataURL("image/jpeg"),
                latitude: pos.coords.latitude,
                longitude: pos.coords.longitude,
                altitude: pos.coords.altitude ? pos.coords.altitude : 0,
                timestamp: pos.timestamp
            }  
        })  
    };

    return (
        <>
            <video autoPlay playsInline id="cameraFeed"></video>
            <input id='shutter' onClick={capture} role='button' type='button' capture="camera"></input>
        </>
    );
};
