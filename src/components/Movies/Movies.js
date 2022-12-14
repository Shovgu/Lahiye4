import React from 'react';
import { useSelector } from 'react-redux';
import MovieItem from '../MovieItem/MovieItem';
import './Movies.css';

const Movies = () => {

    const { loading, movies, error } = useSelector(state => state.movies)

    if (loading) {
        return <h1>Loading...</h1>
    }

    return (
        <>
            {
                <ul className="movies">
                    {movies?.length > 0 ? movies.map((movie) => (
                        <li className="movies__item" key={movie.imdbID}>
                            <MovieItem {...movie} />
                        </li>
                    )) : error ? <h1>Cannot find the movie</h1> : ""}
                </ul>
            }
        </>
    );

}

export default Movies;