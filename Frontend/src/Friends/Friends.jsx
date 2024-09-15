import React, {useCallback, useState, useEffect} from "react";
import "./Friends.css";
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
                setFriends(res.data.data)
                setProcessedFriends(res.data.data);
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
        setProcessedFriends(friends.filter(f => f.username.includes(props.searchParam)))
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

function Friend(props) {
    function handleMapGuess() { //NAMAN

    }

    function createStory(imageURL, displayGuesses = false) {
        const story = document.createElement("div");
        story.className = "story";
        story.style = `background-color: red; opacity: 0;`;

        const backButton = document.createElement("button");
        backButton.id = "backButton";
        backButton.className = "storyButton";
        backButton.addEventListener("click", async ev => {
            story.style.opacity = "0";
            story.style.pointerEvents = "none";
            document.getElementById("navbar").style.opacity = 1;
            await new Promise(r => setTimeout(r, 500));
            if (story.parentElement == document.body) document.body.removeChild(story);
        })

        const backIcon = document.createElement("span");
        backIcon.id = "backButtonIcon";
        backIcon.className = "material-symbols-rounded";
        backIcon.textContent = "arrow_back_ios";
        backIcon.style = "width: 1.75vh; font-size: 3.5vh";

        const switchButton = document.createElement("button");
        switchButton.id = "storySwapButton";
        switchButton.className = "storyButton";

        const switchIcon = document.createElement("span");
        switchIcon.className = "material-symbols-rounded";
        switchIcon.id = "storySwapIcon";
        switchIcon.style = "font-size: 4vh; font-variation-settings: 'FILL' 1, 'wght' 300, 'GRAD' 0, 'opsz' 24;";

        const image = document.createElement('div');
        image.className = "storyImage";
        image.style = `background: url(${imageURL}); background-color: green`;

        const map = document.createElement("div");
        map.className = "mapContainer";
        map.style = "";

        if (displayGuesses) {
            story.appendChild(map);
            switchIcon.textContent = "image";
            switchIcon.style.fontVariationSettings = "font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;";
        } else {
            story.appendChild(image);
            switchIcon.textContent = "person_pin_circle";
        }

        switchButton.addEventListener("click", ev => {
            if (switchIcon.textContent == "person_pin_circle") {
                story.removeChild(image);
                story.appendChild(map);
                switchIcon.textContent = "image";
                switchIcon.style.fontVariationSettings = "font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;";
                handleMapGuess();
            } else {
                story.removeChild(map);
                story.appendChild(image);
                switchIcon.textContent = "person_pin_circle";
                switchIcon.style.fontVariationSettings = "font-variation-settings: 'FILL' 1, 'wght' 300, 'GRAD' 0, 'opsz' 24;";
            }
        });

        backButton.appendChild(backIcon);
        switchButton.appendChild(switchIcon);
        story.appendChild(backButton);
        story.appendChild(switchButton);

        return story;
    }

    async function click() {
        const username = props.username;
        const response = //Get request to get the image of the other user (if any), and whether I made a guess or not
                        { image: "C:\\Users\\saaru\\Downloads\\Capture1726354644.jpg", status: "other" }

        switch (response.status) {
            case "guessMade": //Display your guess and the guess of other users
                break;
            case "noPhotos": //User hasn't posted a photo yet (or their photo expired after 24 hours); Do Nothing
                break;
            default: //You hasn't made a guess / You haven't viewed their new image; show their image
                const story = createStory(response.image, response.status == "guessMade");
                document.body.appendChild(story);   
                document.getElementById("navbar").style.opacity = 0;
                await new Promise(r => setTimeout(r, 50));
                story.style.opacity = "1";
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