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
        const link = document.createElement('a');
        link.download = `Capture${Math.floor(Date.now() / 1000)}.jpg`;
        link.href = canvas.toDataURL('image/jpeg');
        link.click();
    };

    return (
        <>
            <video autoPlay playsInline id="cameraFeed"></video>
            <input id='shutter' onClick={capture} role='button' type='button' capture="camera"></input>
        </>
    );
};
