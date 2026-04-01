function Navbar (props) {
    const setActivePage = props.setActivePage
    
    return(
        <nav>
            <div className="nav-container">
                <ul>
                   <li><button type="button" onClick={() => setActivePage("home")}>Home</button></li>
                   <li> <button type="button" onClick={() => setActivePage("readingGoal")}>readingGoal</button></li>
                    <li><button type="button" onClick={() => setActivePage("mytbr")}>My TBR</button></li>
                    <li><button type="button" onClick={() => setActivePage("genres")}>Genres</button></li>
                    <li><button type="button" onClick={() => setActivePage("explore")}>Explore</button></li>
                    <li><button type="button" onClick={() => setActivePage("myProfile")}>My Profile</button></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;