import React, {useCallback, useState, useEffect} from "react";
import "./Friends.css";
import Story from "./Story";
import axios from "axios";

export default function FriendList(props) {
    function processQuery(friends){
        return friends.filter(f => f.username.includes(props.searchParam))
    }

    //Query Friends from Server
    const [friends, setFriends] = useState([])
    const [processedFriends, setProcessedFriends] = useState([])
    const [loading, setLoading] = useState(true)
    // const searchParams = document.getElementById('searchbar');
    const loadFriends = useCallback(async () => {
        axios.get(`http://localhost:5555/user/`)
            .then((res) => {
                // let processed = processQuery(res.data.data)
                // console.log(processed)
                const processed = res.data.data.filter(f => f._id !== props.uid)
                setFriends(processed)
                setProcessedFriends(processed);
                console.log(res.data.data)
                setLoading(false)
            }).catch((error) => {
                console.log(error)
        })
    }, [])
    
    useEffect(() => {
        const loadData = async () => {
            await loadFriends();
            console.log(friends)
        };
        loadData();

        // setFriends((friends) => friends.filter(f => f.username.includes(props.searchParam)))
        // for (let i = 0; i < friends.length; i++){
        //     if (friends[i].username.includes(props.searchParam)){
        //         setProcessedFriends([...processedFriends, friends[i]])
        //     }
        // }
    }, [loadFriends]);
    
    useEffect(() => {
        setProcessedFriends(friends.filter(f => f.username.includes(props.searchParam) && f._id !== props.uid))
    }, [props.searchParam]);

    // console.log(JSON.parse(friends))
    // console.log(props.searchParam)
    if (loading) {
        return(<p>Loading</p>)
    }

    return (
        <div id="friendList">
            { processedFriends.map(friend => <Friend imgSrc={friend.profileImg} key={"friend:" + friend.username} username={friend.username}></Friend>) }
        </div>
    );
}

export function handleMapGuess() { //NAMAN

}

function Friend(props) {
    function toggleStory(displayMap) {
        const map = document.getElementById("guessMap"), image = document.getElementById("storyImage"), 
              switchIcon = document.getElementById("storySwapIcon"), mapControls = document.getElementById("guessMapControls");

        if (displayMap) {
            image.style.zIndex = "-1";
            map.style.zIndex = "0";
            
            if (mapControls) {
                mapControls.style.zIndex = "3";
                mapControls.style.opacity = "";
                mapControls.style.pointerEvents = "";
            }

            switchIcon.textContent = "image";
            switchIcon.style.fontVariationSettings = "font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;";
            handleMapGuess();
        } else {
            image.style.zIndex = "1";
            map.style.zIndex = "0";
            
            if (mapControls) {
                mapControls.style.zIndex = "0";
                mapControls.style.opacity = "0";
                mapControls.style.pointerEvents = "none";
            }
            
            switchIcon.textContent = "person_pin_circle";
            switchIcon.style.fontVariationSettings = "font-variation-settings: 'FILL' 1, 'wght' 300, 'GRAD' 0, 'opsz' 24;";
        }
    }

    async function click() {
        const username = props.username;
        const [image, setImage] = useState("")
        const [whosGuessed, setWhosGuessed] = useState([])
        const [guessed, setGuessed] = useState(false)
        const [friendID, setFriendID] = useState("")

        const loadFriendImage = useCallback(() => {
            axios.get(`http://localhost:5555/${username}`)
                .then((res) => {
                    setImage(res.data.data.image) // retrieve friend's image
                    setWhosGuessed(res.data.data.guessed)
                    setFriendID(res.data.data._id)
                    setGuessed(res.data.data.guessed.includes(props.uid))
                }).catch((error) => console.log(error))
        })
        loadFriendImage() // image will be null if there is no image

        //move somewhere around here
        const uploadWhosGuessed = useCallback((data) => {
            axios.put(`http://localhost:5555/${friendID}`, {data})
                .then((res) => console.log(res))
                .catch((error) => console.log(error))
        })
        //update whosguessed
        uploadWhosGuessed(whosGuessed)

        const response = //Get request to get the image of the other user (if any), and whether I made a guess or not
                        { image: "C:\\Users\\saaru\\Downloads\\Capture1726354644.jpg", status: "other" }

        switch (response.status) {
            case "guessMade": //Display your guess and the guess of other users
                break;
            case "noPhotos": //User hasn't posted a photo yet (or their photo expired after 24 hours); Do Nothing
                break;
            default: //You hasn't made a guess / You haven't viewed their new image; show their image
                const story = document.getElementById("story");
                document.getElementById("navbar").style.opacity = 0;
                
                toggleStory(response.status == "guessMade");
                await new Promise(r => setTimeout(r, 50));
                story.style.opacity = "1";
                story.style.pointerEvents = "all";
                break;
        }
    }

    return (
        <button className="friend" onClick={click}>
            <img className="profileImg" src={props.imgSrc}></img>
            <pre className="friendName" id={`friend-${props.username}-id`}>{props.username}</pre>
        </button>
    )
}