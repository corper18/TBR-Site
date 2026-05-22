import "./styles/App.css";
import { useState } from "react";
import HomePage from "./pages/HomePage";
import ReadingGoalPage from "./pages/ReadingGoalPage";
import MyTBRPage from "./pages/MyTBRPage";
import GenresPage from "./pages/GenresPage";
import ExplorePage from "./pages/ExplorePage";
import MyProfilePage from "./pages/MyProfilePage";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import BookPage from "./pages/BookPage";
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
        <Route path="/" element={<HomePage />} />
        <Route path="/readingGoal" element={<ReadingGoalPage />} />
        <Route path="/mytbr" element={<MyTBRPage  searchQuery={searchQuery} />} />
        <Route path="/genres"  element={<GenresPage />} />
        <Route path="/explore"  element={<ExplorePage />} />
        <Route path="/myprofile" element={<MyProfilePage />} />
        <Route path="/books/:id" element={<BookPage />} />
      </Routes>
    </div>
    </>
  );
}