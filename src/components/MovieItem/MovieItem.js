import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMovie } from '../../store/actions/actions';
import './MovieItem.css';

const MovieItem = (props) => {
    const { list } = useSelector(state => state.lists)
    const { Title, Year, Poster } = props;
    const dispatch = useDispatch()

    const addToList = () => {
        dispatch(addMovie(props))
    }

    const check = list.some((item) => {
        return item.imdbID === props.imdbID
    })

    return (
        <article className="movie-item">
            <img className="movie-item__poster" src={Poster} alt={Title} />
            <div className="movie-item__info">
                <h3 className="movie-item__title">{Title}&nbsp;({Year})</h3>
                <button disabled={check} type="button" className="movie-item__add-button" onClick={addToList}>Add to list</button>
            </div>
        </article>
    );
}

export default MovieItem;