import React from "react";
import './styles/MovieItem.css';

const MovieItem = ({ movie }) => {
    // Verilen resim URL'si varsa, gösterelim
    const imageUrl = movie.poster || movie.image || 'https://via.placeholder.com/150'; // Varsayılan bir resim

    return (
        <div className="movie-item">
            <img 
                src={imageUrl} 
                alt={movie.title} 
                className="movie-image" 
            />
            <h3>{movie.title}</h3>
            <p>{movie.year}</p>
        </div>
    );
};

export default MovieItem;
