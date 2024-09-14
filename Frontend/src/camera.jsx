import React, { useState, useRef, useEffect } from 'react';
import { Camera, Download, Video, VideoOff } from 'lucide-react';
import './CameraComponent.css';

const CameraComponent = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [isCapturing, setIsCapturing] = useState(false);
  const [capturedImage, setCapturedImage] = useState(false);

  useEffect(() => {
    return () => {
      if (isCapturing) {
        stopCamera();
      }
    };
  }, [isCapturing]);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { facingMode: 'environment' } 
      });
      videoRef.current.srcObject = stream;
      setIsCapturing(true);
    } catch (err) {
      console.error("Error accessing the camera:", err);
      alert("Failed to access the camera. Please make sure you've granted the necessary permissions.");
    }
  };

  const stopCamera = () => {
    const stream = videoRef.current.srcObject;
    const tracks = stream.getTracks();
    tracks.forEach(track => track.stop());
    videoRef.current.srcObject = null;
    setIsCapturing(false);
  };

  const toggleCamera = () => {
    if (isCapturing) {
      stopCamera();
    } else {
      startCamera();
    }
  };

  const captureImage = () => {
    if (isCapturing) {
      const context = canvasRef.current.getContext('2d');
      context.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);
      setCapturedImage(true);
    } else {
      alert('Please start the camera first');
    }
  };

  const downloadImage = () => {
    if (capturedImage) {
      const link = document.createElement('a');
      link.download = `Capture${Math.floor(Date.now() / 1000)}.jpg`;
      link.href = canvasRef.current.toDataURL('image/jpeg');
      link.click();
    } else {
      alert('Please capture an image first');
    }
  };

  return (
    <div className="camera-component">
      <div className="camera-container">
        {isCapturing ? (
          <video ref={videoRef} autoPlay playsInline className="camera-video" />
        ) : (
          <div className="camera-placeholder">Camera Off</div>
        )}
      </div>
      <div className="controls">
        <button className="btn" onClick={toggleCamera}>
          {isCapturing ? <VideoOff /> : <Video />}
          {isCapturing ? 'Stop Camera' : 'Start Camera'}
        </button>
        <button className="btn" onClick={captureImage} disabled={!isCapturing}>
          <Camera /> Capture
        </button>
        <button className="btn" onClick={downloadImage} disabled={!capturedImage}>
          <Download /> Save
        </button>
      </div>
      <div className="canvas-container">
        <canvas ref={canvasRef} width={320} height={240} className="camera-canvas" />
      </div>
    </div>
  );
};

export default CameraComponent;