import React, { useState } from "react";
import Mappedin, { MapView, useMapData, useMap, Label} from "@mappedin/react-sdk";
import "@mappedin/react-sdk/lib/esm/index.css";
import { useEffect } from "react";
import { Navigation } from "@mappedin/react-sdk";
import { Path } from "@mappedin/react-sdk";

function ResultCustomComponent() {
    const {mapData, mapView} = useMap();

    mapView.Labels.removeAll()
    // const [navi, setNavi] = useState <Mappedin.Directions | undefined> (undefined);
    const lastUserGuess = JSON.parse(localStorage.getItem("lastUserGuess") || '{}');
    const userguess = new Mappedin.Coordinate(lastUserGuess[0], lastUserGuess[1], lastUserGuess[2]);

    //hard code
    const index = localStorage.getItem("index");
    const b = index ? JSON.parse(index) : false;
    const actuallocation = new Mappedin.Coordinate(43.47276, -80.53937, "m_d1a647643658e985");

    console.log("Actual: ", actuallocation);
    console.log("Guess: ", userguess)
    const directions = mapView.getDirections(userguess, actuallocation);

    console.log(directions);
    const distance = (directions?.distance) == null ? 10000 : directions.distance;
    const points = (10000 / distance).toFixed(0);
    localStorage.setItem("points", `${+localStorage.getItem("points") + points}`);

    mapView.Labels.add(userguess, 'Your Guess');
    mapView.Labels.add(actuallocation, "Actual Location");  
    mapView.expand();
    const navbar = document.getElementById("navbar");
    navbar.style.opacity = "1";
    navbar.style.visibility = "";
    
    //return  <Navigation directions={directions} />)

    
    // return mapData.getByType("space").map((space) => {
    //     return <Label target={space.center} text={space.name} />;
    //   });
    return (
      <>
        {/* Display Points in a Bubble at the Top Center */}
        <div style={{
            position: "fixed", // Fixed at the top
            top: "20px", // Margin from the top
            left: "50%", // Center horizontally
            transform: "translateX(-50%)", // Perfectly center by offsetting 50%
            padding: "10px 20px", // Padding for a bubble-like appearance
            backgroundColor: "var(--accent-color)", // Light green color for the bubble
            color: "white", // White text color
            borderRadius: "25px", // Rounded for the bubble shape
            fontSize: "18px", // Slightly larger text
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // A bit of shadow for depth
            zIndex: 1000, // Make sure it's on top of everything else
        }}>
            <pre className="results">
                Distance: {distance.toFixed(0) + "m\n"}
                Points: {points}
            </pre> 
        </div>
        
        <Path coordinate={directions.coordinates} />
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
