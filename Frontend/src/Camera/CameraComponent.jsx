import React, { useState, useRef, useEffect } from 'react';
import { Camera, Download, Video, VideoOff } from 'lucide-react';
import './CameraComponent.css';

function stopCamera() {
    const stream = videoRef.current.srcObject;
    const tracks = stream.getTracks();
    tracks.forEach(track => track.stop());
    videoRef.current.srcObject = null;
    setIsCapturing(false);
};

export default function CameraComponent() {
    const captureImage = () => {
        const context = canvasRef.current.getContext('2d');
        context.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);
        const link = document.createElement('a');
        link.download = `Capture${Math.floor(Date.now() / 1000)}.jpg`;
        link.href = canvasRef.current.toDataURL('image/jpeg');
        link.click();
    };

    return (
        <>
            <video autoPlay playsInline id="cameraFeed"></video>
        </>
    );
};
