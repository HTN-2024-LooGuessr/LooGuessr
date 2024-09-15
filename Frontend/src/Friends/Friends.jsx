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
        axios.get(`https://looguessr.onrender.com/user/`)
            .then((res) => {
                const processed = res.data.data.filter(f => f._id !== props.uid)
                setFriends(processed)
                setProcessedFriends(processed);
                console.log(res.data.data)
                setLoading(false)
            }).catch((error) => {
                console.log(error)
        })
       /*const processed = [ { username: "shougan_gu", image: "...", guessed: [] },
                           { username: "SaarujanS", image: "", guessed: [] },
                           { username: "NBMaster", image: "", guessed: [] },
                           { username: "jzhu19", image: "", guessed: [] },
                           { username: "bob2006", image: "...", guessed: [] },
                           { username: "nbiyani", image: "...", guessed: [] },
                           { username: "htn2024", image: "...", guessed: [] }  ]
       setFriends()*/
    }, [])
    
    useEffect(() => {
        const loadData = async () => {
            await loadFriends();
            console.log(friends)
        };
        loadData();
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
        const res = await axios.get(`https://looguessr.onrender.com/user/username/${username}`);
        let image = res.data[0].image, whosGuessed = res.data[0].guessed, friendID = res.data[0]._id,
            hasGuessed = res.data[0].guessed.includes(props.uid);

        // //move somewhere around here
        // const uploadWhosGuessed = useCallback((data) => {
        //     axios.put(`http://localhost:5555/${friendID}`, {data})
        //         .then((res) => console.log(res))
        //         .catch((error) => console.log(error))
        // })
        // //update whosguessed
        // uploadWhosGuessed(whosGuessed)

        if (image != null && image.indexOf("data:") != -1) { //You haven't made a guess / You haven't viewed their new image
            const story = document.getElementById("story"), storyImg = document.getElementById("storyImage");
            const navbar = document.getElementById("navbar");
            navbar.style.opacity = 0;
            navbar.style.visibility = "hidden"
            
            await new Promise(r => setTimeout(r, 50));
            storyImg.style.background = `url(${image})`;
            story.style.opacity = "1";
            story.style.pointerEvents = "all";
        }
        
        toggleStory(hasGuessed);
    }

    return (
        <button className="friend" onClick={click}>
            <img className="profileImg" src={props.imgSrc}></img>
            <pre className="friendName" id={`friend-${props.username}-id`}>{props.username}</pre>
        </button>
    )
}