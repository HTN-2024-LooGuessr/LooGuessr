import './navbar.css'

export default function NavBar() {
    return (
        <div id="navbar">
            <NavButton icon="./assets/react.svg"></NavButton>
            <NavButton icon="./assets/react.svg"></NavButton>
            <NavButton icon="./assets/react.svg"></NavButton>
        </div>
    )
}

export default function NavButton(props) {
    return (
        <button className='navbutton'>
            <img className='navicon' src={props.icon}></img>
        </button>
    )
}
