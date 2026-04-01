import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import ReadingGoal from "./components/ReadingGoal";
import MyTBR from "./components/MyTBR";
import Genres from "./components/Genres";
import Explore from "./components/Explore";
import MyProfile from "./components/MyProfile";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";

export default function App() {
  const [activePage, setActivePage] = useState("home");

  return (
   <>
      <Navbar setActivePage={setActivePage} />
  
    <div className="page-container">
      <SearchBar />
      {/* detta är en genväg istället för If-sats */}
      {activePage === "home" && <Home />}
      {activePage === "readingGoal" && <ReadingGoal />}
      {activePage === "mytbr" && <MyTBR />}
      {activePage === "genres" && <Genres />}
      {activePage === "explore" && <Explore />}
      {activePage === "myProfile" && <MyProfile />}
    </div>
    </>
  );
}