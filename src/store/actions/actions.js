import axios from "axios"
import { Action_Types } from "../action-types/types"

export const getMovies = (search) => {
    return async (dispatch) => {
        try {

            dispatch({
                type: Action_Types.MOVIE_LOAD
            })

            const { data } = await axios.get(`https://www.omdbapi.com/?s=${search}&apikey=82778cb5`)

            dispatch({
                type: Action_Types.MOVIE_SUCCESS,
                payload: data.Search
            })

        } catch (error) {
            dispatch({
                type: Action_Types.MOVIE_ERROR,
                payload: error.message
            })
        }
    }
}

export const addMovie = (movie) => {
    return {
        type: Action_Types.MOVIE_ADD,
        payload: movie
    }
}

export const removeMovie = (id) => {
    return {
        type: Action_Types.MOVIE_DELETE,
        payload: id
    }
}