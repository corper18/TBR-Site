import SearchBar from "./SearchBar";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";

function Navbar ({ searchQuery, setSearchQuery}) {
    return(
        <nav>
            <div className="nav-container">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/readingGoal">Reading Goal</Link></li>
                    <li><Link to="/mytbr">My TBR</Link></li>
                    <li><Link to="/genres">Genres</Link></li>
                    <li><Link to="/explore">Explore</Link></li>
                    <li><Link to="/myprofile">My Profile</Link></li>
                </ul>

                   <SearchBar
                        searchQuery={searchQuery}
                        setSearchQuery={setSearchQuery}
                    />
            </div>
        </nav>
    );
}

export default Navbar;