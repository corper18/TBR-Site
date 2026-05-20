function SearchBar({ searchQuery, setSearchQuery }) {

    return (
        <div className="search-bar">
            <input 
            type="text"
            placeholder="Search your TBR"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            />

            <button type="button" >
                🔍
            </button>
        </div>
    );
}

export default SearchBar;