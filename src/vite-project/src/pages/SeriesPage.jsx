import React, { useEffect, useState } from "react";
import MovieItem from "../components/MovieItem";

const SeriesPage = () => {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    fetch("https://clonejson.vercel.app/api/movies")
      .then((res) => res.json())
      .then((data) => {
        const filteredSeries = data.filter((item) => item.type === "series");
        setSeries(filteredSeries);
      })
      .catch((err) => console.error("Hata:", err));
  }, []);

  return (
    <div>
      <div className="movie-list">
        {series.map((serie) => (
          <MovieItem key={serie.id} movie={serie} />
        ))}
      </div>
    </div>
  );
};

export default SeriesPage;
