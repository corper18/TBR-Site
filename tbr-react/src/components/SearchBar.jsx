import { useState } from "react";

function SearchBar() {
    const [query, setQuery] = useState("");
    
    const handleSearch = () => {
        console.log("Searching for:", query);
    };

    return (
        <div className="search-bar">
            <input type="text"
            placeholder="Search your TBR"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            />
            <button type="button" onClick={handleSearch}>
                🔍
            </button>
        </div>
    );
}

export default SearchBar;