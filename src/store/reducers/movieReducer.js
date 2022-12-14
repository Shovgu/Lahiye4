import { Action_Types } from "../action-types/types"

const initialState = {
    list: []
}

export const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case Action_Types.MOVIE_ADD:
            return {
                ...state,
                list: [...state.list, action.payload]
            }
        case Action_Types.MOVIE_DELETE:
            const newList = state.list.filter((item) => {
                return item.imdbID !== action.payload
            })
            return {
                ...state,
                list: newList
            }

        default: return state
    }
}