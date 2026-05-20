import "./App.css";
import { useState } from "react";
import Home from "./components/Home";
import ReadingGoal from "./components/ReadingGoal";
import MyTBR from "./components/MyTBR";
import Genres from "./components/Genres";
import Explore from "./components/Explore";
import MyProfile from "./components/MyProfile";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import { Routes, Route } from "react-router-dom";

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
   <>
      <Navbar />
  
    <div className="page-container">
      <SearchBar 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/readingGoal" element={<ReadingGoal />} />
        <Route path="/mytbr" element={<MyTBR  searchQuery={searchQuery} />} />
        <Route path="/genres"  element={<Genres />} />
        <Route path="/explore"  element={<Explore />} />
        <Route path="/myprofile" element={<MyProfile />} />
      </Routes>
    </div>
    </>
  );
}