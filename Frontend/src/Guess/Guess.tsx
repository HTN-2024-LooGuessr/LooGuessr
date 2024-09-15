/*
To-do: (Put it on the actual repo - must rename App)
- Add it to the database based on the user, and the guess
-sort the select floor numbers


**/

import React, {useState} from "react";
import Mappedin, { MapView, useMapData, useMap, Label} from "@mappedin/react-sdk";
import "../Friends/Friends.css"
import "@mappedin/react-sdk/lib/esm/index.css";


function GuessCustomComponent() {
    const { mapData, mapView } = useMap();
    const [curFloorID, setCurFloorID] = useState("m_e6c96a31fba4ef51")

    const [eventCoordinate, setEventCoordinate] = useState({})
    const [guess, setGuess] = useState(false);

    // add event handler for the coordinate (labels.add)
    mapView.on("click", (event) => {
        var a = document.getElementById("namanbutton");
        if (a) a.style.backgroundColor = 'var(--accent-color)';
        setGuess(true);

        // if(event.spaces.length > 0)
        
        //console.log(guess);
        mapView.Labels.removeAll(); 
        setEventCoordinate([event.coordinate.latitude, event.coordinate.longitude, curFloorID]);
        // setEventCoordinate(new Mappedin.Coordinate(event.coordinate.latitude, event.coordinate.longitude, curFloorID));
        
        //ADD TO THE DB WITH THE USER

        //Add the label
        return mapView.Labels.add(new Mappedin.Coordinate(event.coordinate.latitude, event.coordinate.longitude, curFloorID), 'Your Guess');
    }) 

    // Function to store guess coordinates in localStorage
    function storeCoordsLocally () {
        // if (guess) {
        // Store guess in localStorage
        localStorage.setItem("lastUserGuess", JSON.stringify(eventCoordinate));
        console.log("Your guess has been saved!"); 
        // }
    };

    return (
        <>
        <select
        onChange={(e) => {
          setCurFloorID(e.target.value);
          mapView.setFloor(e.target.value);
        }}
        title="level select"
        style={{ position: 'absolute', top: 10, left: 10, 
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
        }}
        >
        {mapData.getByType("floor").map((floor, idx) => {
          return (
            <option key={idx} value={floor.id}>
              {floor.name}
            </option>
          );
        })}
        </select>
        <div id="guessMapControls" style={{ pointerEvents: "none", opacity: "0", position: "absolute", top: 0, left: 0}}>
            {/* <button onClick={() => console.log("other button click")} style={{position: 'absolute', top: 0, left: 100}}>
                Hello Button
            </button> */}

            {/* SUBMIT BUTTON */}
            <button id='namanbutton' onClick = {storeCoordsLocally}
                style={{
                    position: "fixed", // Fixed position so it floats
                    bottom: "10%", // Slight margin from the bottom
                    left: "50%", // Center horizontally
                    transform: "translateX(-50%)", // Align center horizontally
                    width: "200px", // Larger width for pill shape
                    height: "50px", // Shorter height
                    borderRadius: "15px", // High border radius for rounded pill shape
                    backgroundColor: "var(--primary-color)", // Green if guess exists, grey otherwise
                    border: "none",
                    outline: "none",
                    color: "white",
                    fontSize: "18px", // Text size
                    fontFamily: "system-ui",
                    fontWeight: "500",
                    display: "flex", // Flexbox to center content
                    justifyContent: "center", // Center text horizontally
                    alignItems: "center", // Center text vertically
                    boxShadow: "0 0 5px rgb(0 0 0 / 25%)",
                    transition: "background-color 150ms ease-in"
                }} disabled={!guess}>
                Submit Guess!
            </button>
        </div>
        </>
    );
}

export default function Guess() {
    // See Demo API key Terms and Conditions
    // https://developer.mappedin.com/v6/demo-keys-and-maps/
    const { isLoading, error, mapData } = useMapData({
        key: "mik_Qar1NBX1qFjtljLDI52a60753",
        secret: "mis_CXFS9WnkQkzQmy9GCt4ucn2D68zNRgVa2aiJj5hEIFM8aa40fee",
        mapId: "66ce20fdf42a3e000b1b0545"
    });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        console.log("TEStING")
        return <div>{error.message}</div>;
    }

    return mapData ? (
        <MapView id="guessMap" mapData={mapData} style={{ position: "absolute", top: 0 }}>
            <GuessCustomComponent />
        </MapView>
    ) : null;
}