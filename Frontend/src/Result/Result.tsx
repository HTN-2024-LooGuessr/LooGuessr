import React, { useState } from "react";
import Mappedin, { MapView, useMapData, useMap, Label} from "@mappedin/react-sdk";
import "@mappedin/react-sdk/lib/esm/index.css";
import { useEffect } from "react";
import { Navigation } from "@mappedin/react-sdk";
import { Path } from "@mappedin/react-sdk";

function ResultCustomComponent() {
    const {mapData, mapView} = useMap();

    // const [navi, setNavi] = useState <Mappedin.Directions | undefined> (undefined);
    const lastUserGuess = JSON.parse(localStorage.getItem("lastUserGuess") || '{}');
    const userguess = new Mappedin.Coordinate(lastUserGuess[0], lastUserGuess[1], lastUserGuess[2]);

    //hard code
    const index = localStorage.getItem("index");
    b: Boolean = index ? JSON.parse(index) : false;
    
    if (b) {
      const actuallocation = new Mappedin.Coordinate(43.47276, -80.53937, "m_d1a647643658e985");
    } else {
      const actuallocation = new Mappedin.Coordinate(43.47276, -80.53937, "m_d1a647643658e985");
    }
    
    
    const directions = mapView.getDirections(userguess, actuallocation);
    const distance = (directions?.distance);
    console.log(distance);
    const points = 10000 / distance;

    useEffect(() => {
        mapView.Labels.removeAll()

        const lastUserGuess = JSON.parse(localStorage.getItem("lastUserGuess") || '{}');
        const userguess = new Mappedin.Coordinate(lastUserGuess[0], lastUserGuess[1], lastUserGuess[2]);

        const index = localStorage.getItem("index");
        b: Boolean = index ? JSON.parse(index) : false;
        if (b) {
          const actuallocation = new Mappedin.Coordinate(43.47276, -80.53937, "m_d1a647643658e985");
          localStorage.setItem("index", JSON.stringify(false));
        } else {
        const actuallocation = new Mappedin.Coordinate(43.47276, -80.53937, "m_d1a647643658e985");}

        mapView.Labels.add(userguess, 'Your Guess');
        mapView.Labels.add(actuallocation, "Actual Location");  
        mapView.expand()
    },
    [mapView] //whenever mapView is changed
    )
    
    //return  <Navigation directions={directions} />)

    
    // return mapData.getByType("space").map((space) => {
    //     return <Label target={space.center} text={space.name} />;
    //   });
    return (
      <>
        {/* Display Points in a Bubble at the Top Center */}
        <div
          style={{
            position: "fixed", // Fixed at the top
            top: "20px", // Margin from the top
            left: "50%", // Center horizontally
            transform: "translateX(-50%)", // Perfectly center by offsetting 50%
            padding: "10px 20px", // Padding for a bubble-like appearance
            backgroundColor: "#4caf50", // Light green color for the bubble
            color: "white", // White text color
            borderRadius: "25px", // Rounded for the bubble shape
            fontSize: "18px", // Slightly larger text
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // A bit of shadow for depth
            zIndex: 1000, // Make sure it's on top of everything else
          }}
        >
          Distance: {distance + "m"}
          Points: {points}
        </div>
        
        <Path coordinate={directions.coordinates} />

        <button id = 'shougunbutton' // onClick = {/*JONATHAN DO ROUTING*/}
          style={{
            position: "fixed", // Fixed position so it floats
            bottom: "30px", // Slight margin from the bottom
            left: "50%", // Center horizontally
            transform: "translateX(-50%)", // Align center horizontally
            width: "200px", // Larger width for pill shape
            height: "50px", // Shorter height
            borderRadius: "25px", // High border radius for rounded pill shape
            backgroundColor: "green", // Green if guess exists, grey otherwise
            color: "white",
            fontSize: "18px", // Text size
            display: "flex", // Flexbox to center content
            justifyContent: "center", // Center text horizontally
            alignItems: "center", // Center text vertically
            // cursor: guess ? "pointer" : "not-allowed", // Disabled style if no guess
          }}
        >
        Home
        </button>
      </>
      )
}
export default function Result() {
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
      <MapView mapData={mapData}>
        <ResultCustomComponent />
      </MapView>
    ) : null;
  }
