import { useEffect } from 'react'
import './navbar.css'
import { useNavigate } from 'react-router-dom'

export default function NavBar() {
    return (
        <div id="navbar">
            <NavButton icon="add_a_photo" borderRadius="15px 0 0 15px" redirect="photo"></NavButton>
            <NavButton icon="dashboard" redirect=""></NavButton>
            <NavButton icon="bar_chart" borderRadius="0 15px 15px 0" redirect="profile"></NavButton>
        </div>
    )
}

function NavButton(props) {
    const navigate = useNavigate();

    async function click(ev) {
        ev.preventDefault();
        if (window.location.pathname.indexOf("photo") != -1) {
            const camVideo = document.getElementById("cameraFeed");
            const stream = camVideo.srcObject;

            if (stream != null) {
                const tracks = stream.getTracks();
                tracks.forEach(track => track.stop());
                camVideo.srcObject = null;
            }
        }

        navigate(`/LooGuessr/${props.redirect}`);
        if (props.redirect == "photo") {
            let stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" }, audio: false });
            const video = document.getElementById("cameraFeed");
            video.srcObject = stream;
        }
    }
    
    return (
        <button className='navbutton' onClick={click} style={{borderRadius: props.borderRadius}}>
            <span className='navicon material-symbols-rounded'>{props.icon}</span>
        </button>
    )
}