import React, { useState } from "react";
import Navbar from "./components/Navbar";
import MainPage from "./pages/MainPage";
import MoviesPage from "./pages/MoviesPage";  
import SeriesPage from "./pages/SeriesPage";  
import SavedFilmsPage from "./pages/SavedFilmsPage";  
import Search from "./components/Search";
const App = () => {
  const [currentPage, setCurrentPage] = useState("home");
  return (
  <div>
  <Navbar setCurrentPage={setCurrentPage} />
  <Search setCurrentPage={setCurrentPage} />
   {currentPage === "home" && <MainPage />}
   {currentPage === "movies" && <MoviesPage />}  
   {currentPage === "series" && <SeriesPage />}  
   {currentPage === "savedfilms" && <SavedFilmsPage />}  
  </div>
  );
};
export default App;
