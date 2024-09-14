import './navbar.css'

export default function NavBar() {
    return (
        <div id="navbar">
            <NavButton icon="add_a_photo" borderRadius="15px 0 0 15px"></NavButton>
            <NavButton icon="dashboard"></NavButton>
            <NavButton icon="bar_chart" borderRadius="0 15px 15px 0"></NavButton>
        </div>
    )
}

function NavButton(props) {
    return (
        <button className='navbutton' style={{borderRadius: props.borderRadius}}>
            <span className='navicon material-symbols-rounded'>{props.icon}</span>
        </button>
    )
}
