import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getMovies } from '../../store/actions/actions';
import './SearchBox.css';

const SearchBox = () => {

    const dispatch = useDispatch()
    const [state, setState] = useState({
        searchLine: '',
    })

    const searchLineChangeHandler = (e) => {
        setState({ ...state, searchLine: e.target.value });
    }

    const searchBoxSubmitHandler = (e) => {
        e.preventDefault();
        dispatch(getMovies(state.searchLine))
    }

    const { searchLine } = state;

    return (
        <div className="search-box">
            <h1 className='search-box_title'>MOVIES</h1>
            <form className="search-box__form" onSubmit={searchBoxSubmitHandler}>
                <label className="search-box__form-label">
                    <input value={state.searchLine} type="text" className="search-box__form-input" placeholder="For example, Shawshank Redemption" onChange={searchLineChangeHandler} />
                </label>
                <button type="submit" className="search-box__form-submit" disabled={!searchLine}>Search</button>
            </form>
        </div>
    );

}

export default SearchBox;