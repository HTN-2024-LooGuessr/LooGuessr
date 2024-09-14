import React, {useCallback, useState, useEffect} from "react";
import "./Friends.css";
import PropTypes from "prop-types";
import axios from "axios";

// function isSubstring(main, compare){
//     let P = 27, M = 10**9+7
//     if (compare.length() > main.length())
//         return false
//     let hash_main = 0
//     for ()
// }



export default function FriendList(props) {
    function processQuery(friends){
        return friends.filter(f => f.username.includes(props.searchParam))
    }
    //Query Friends from Server
    // const friends = [ { username: "Saarujan Sathees", profileImg: "https://htmlcolorcodes.com/assets/images/colors/red-color-solid-background-1920x1080.png" } ];
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
                // setProcessedFriends([]);
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
        setFriends((friends) => friends.filter(f => f.username.includes(props.searchParam)))
    }, [props.searchParam]);

    // console.log(JSON.parse(friends))
    // console.log(props.searchParam)
    if (loading) {
        return(<p>Loading</p>)
    }

    return (
        <div id="friendList">
            { friends.map(friend => <Friend imgSrc={friend.profileImg} key={"friend:" + friend.username} username={friend.username}></Friend>) }
        </div>
    );
}

function Friend(props) {
    return (
        <button className="friend">
            <img className="profileImg" src={props.imgSrc}></img>
            <pre className="friendName">{props.username}</pre>
        </button>
    )
}