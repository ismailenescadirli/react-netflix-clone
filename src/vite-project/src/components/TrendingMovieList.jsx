import { useEffect, useState } from 'react';
import './styles/TrendingMovieList.css';

const TrendingMovieList = () => {
    const [trendMovie, setTrendMovie] = useState([]);

    useEffect(() => {
        async function trendMovieList() {
            const res =  await fetch('https://clonejson.vercel.app/api/movies');
            const data = await res.json();
            setTrendMovie(data);
        }
        trendMovieList();
    }, []);
    
    return (
        <div>
            <div className="trending-movies">
                <h3>Trending</h3>
                <div className="trend-movies">
                    {trendMovie.map((t, index) => {
                        return (
                            t.trending && (
                                <div className="trend-movie" key={index}>
                                    <img src={t.image} alt="" className='movie-image' />
                                    <div className='movie-content'>
                                        <div className="movie-article">
                                            <div className="movie-details">
                                                <p>{t.release_date}</p>
                                                <div className="movie-type">
                                                    <img src="src/assets/img/shape.png" alt="" />
                                                    <p>{t.type}</p>
                                                    <p className='pg'>PG</p>
                                                </div>
                                            </div>
                                            <h5>{t.title}</h5>
                                        </div>
                                    </div>
                                </div>
                            )
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default TrendingMovieList;
  