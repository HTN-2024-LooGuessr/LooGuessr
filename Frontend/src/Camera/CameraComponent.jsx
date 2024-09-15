import React, {useCallback}from 'react';
import './CameraComponent.css';
import axios from "axios";
import { useState } from 'react';
export default function CameraComponent() {
    const [curFloorNum, setCurFloorNum] = useState("1")
    async function capture() {
        const video = document.getElementById("cameraFeed") 
        const canvas = document.createElement("canvas");
        let data = {"image": 'sajfkljhghsdljgsdl'}
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        
        const context = canvas.getContext('2d');
        context.drawImage(video, 0, 0, canvas.width, canvas.height);

        const loadImageInfo = async () => {
            axios.put(`https://looguessr.onrender.com/user/${localStorage.getItem("uid")}`, data)
                .then((res) => {
                    console.log("hi processed")
                    console.log(res)
                })
                .catch((error) => console.log(error))
        }
        //JONATHAN: Send the dataURL (image), and the username of the current account
        navigator.geolocation.getCurrentPosition(pos => {
            data = {
                image: canvas.toDataURL("image/jpeg"),
                lat: pos.coords.latitude,
                long: pos.coords.longitude,
                alt: pos.coords.altitude ? pos.coords.altitude : 0,
                // timestamp: pos.timestamp
                };
            loadImageInfo()
        })
        console.log(data)
    };

    return (
        <>
        <select
        onChange={(e) => {
          setCurFloorID(e.target.value);
        }}
        title="level select camera"
        style={{ 
            position: 'absolute', 
            top: 10, 
            left: 10, 
            backgroundColor: 'rgb(170 100 180)', /* Purple background */
            color: '#000000',
            fontFamily: 'Arial',  
            fontSize: 16, 
            borderRadius: '15px', /* Rounded corners */
            padding: '10px 20px', 
            border: 'none', 
            outline: 'none', 
            cursor: 'pointer', 
            transition: 'background-color 0.3s ease',
            zIndex: 1000 /* Ensure the select is on top */
        }}>


            <option> Floor 1</option>
            <option> Floor 2</option>
            <option> Floor 3</option>
            <option> Floor 4</option>
            <option> Floor 5</option>
            <option> Floor 6</option>
            <option> Floor 7</option>
        </select>

        <>
            <video autoPlay playsInline id="cameraFeed"></video>
            <input id='shutter' onClick={capture} role='button' type='button' capture="camera"></input>
        </>
        </>
    );
};
