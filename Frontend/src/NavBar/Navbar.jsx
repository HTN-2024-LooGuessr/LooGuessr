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
    return (
        <button className='navbutton' onClick={(e) => {e.preventDefault; navigate(`/LooGuessr/${props.redirect}`)}} style={{borderRadius: props.borderRadius}}>
            <span className='navicon material-symbols-rounded'>{props.icon}</span>
        </button>
    )
}