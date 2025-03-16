import React, { useEffect, useState } from "react";
import MovieItem from "../components/MovieItem";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("https://clonejson.vercel.app/api/movies")
      .then((res) => res.json())
      .then((data) => {
        // Sadece 'movie' tipindeki filmleri filtreleyelim
        const filteredMovies = data.filter((item) => item.type === "movie");
        setMovies(filteredMovies);
      })
      .catch((err) => console.error("Hata:", err));
  }, []);

  return (
    <div>
      <div className="movie-list">
        {movies.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MoviesPage;
