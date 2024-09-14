import './searchbar.css'

function onSearch(ev = new InputEvent()) {
    const search = document.getElementById('searchbar');
    
}

export default function SearchBar() {
    return (
        <>
            <input id='searchbar' autoCapitalize='none' onKeyUp={onSearch}></input>
            <span id='searchbutton' className='material-symbols-rounded'>search</span>
        </>
    );
}