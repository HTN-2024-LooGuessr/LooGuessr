import './searchbar.css'

export default function SearchBar() {
    return (
        <div style={{ position: 'absolute', top: '-6vh', height: '12vh', width: '100vw', padding: '0', margin: '0', zIndex: '100' }}>
            <input id='searchbar'>
                <span style>search</span>
            </input>
        </div>
    )
}