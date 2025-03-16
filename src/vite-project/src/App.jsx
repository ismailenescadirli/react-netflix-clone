import React, { useState } from "react";
import Navbar from "./components/Navbar";
import MainPage from "./pages/MainPage";
import MoviesPage from "./pages/MoviesPage";  
import SeriesPage from "./pages/SeriesPage";  
import SavedFilmsPage from "./pages/SavedFilmsPage";  
import Search from "./components/Search";
import MovieList from "./components/MovieList";
import TrendingMovieList from "./components/TrendingMovieList";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <div>
      <Navbar setCurrentPage={setCurrentPage} />

      {/* Home sayfasında tüm componentleri göster */}
      {currentPage === "home" && (
        <>
          <Search setCurrentPage={setCurrentPage} />
          <TrendingMovieList setCurrentPage={setCurrentPage} />
          <MovieList setCurrentPage={setCurrentPage} />
          <MainPage />
        </>
      )}

      {/* MoviesPage sayfasında sadece MovieList göster */}
      {currentPage === "movies" && (
        <>
          <MoviesPage setCurrentPage={setCurrentPage} />
        </>
      )}

      {/* Diğer sayfalar */}
      {currentPage === "series" && <SeriesPage />}
      {currentPage === "savedfilms" && <SavedFilmsPage />}
    </div>
  );
};

export default App;
