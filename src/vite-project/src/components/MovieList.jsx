import { useEffect, useState } from 'react'
import './styles/MovieList.css';

const MovieList = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function movieList() {
            const res =  await fetch('https://clonejson.vercel.app/api/movies')
            const data = await res.json();
            setMovies(data)
        }
        movieList();
    }, [])

    return(
        <div>
            <div className="hero">
                <h1>Recommended for you</h1>
                <div className="movie-list">
                    {
                        movies.map((m, index) => (
                            <div className="movie" key={m.index}>
                                <div className='movie-bookmark'>
                                    <img className='movie-image' src={m.image} alt="" />
                                    <button className='book-mark-btn'><img className='book-mark' src="src/assets/img/bookmark.png" alt="" /></button>
                                </div>
                                <div className="movie-details">
                                    <p>{m.release_date}</p>
                                    <div className="movie-type">
                                        <img src="src/assets/img/shape.png" alt="" />
                                        <p>{m.type}</p>
                                    </div>
                                    <p>E</p>
                                </div>
                                <h3>{m.title}</h3>
                            </div>
                        ))
                    }
                    {/* <div className="movie">
                        <div className='movie-bookmark'>
                            <img className='movie-image' src="src/assets/img/movie.png" alt="" />
                            <button className='book-mark-btn'><img className='book-mark' src="src/assets/img/bookmark.png" alt="" /></button>
                        </div>
                        <div className="movie-details">
                            <p>2019</p>
                            <div className="movie-type">
                                <img src="src/assets/img/shape.png" alt="" />
                                <p>Movie</p>
                            </div>
                            <p>E</p>
                        </div>
                        <h3>The Great Lands</h3>
                    </div> */}
                </div>
            </div>
        </div>
    )
}


export default MovieList