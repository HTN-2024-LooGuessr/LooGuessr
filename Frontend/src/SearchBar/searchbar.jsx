import './searchbar.css'

export default function SearchBar() {
    return (
        <>
            <input id='searchbar' autoCapitalize='none'></input>
            <span id='searchbutton' className='material-symbols-rounded'>search</span>
        </>
    )
}