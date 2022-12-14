import { combineReducers } from "redux"
import { movieReducer } from "./movieReducer"
import { movieReducers } from "./movieReducers"

export const rootReducer = combineReducers({
   movies: movieReducers,
   lists: movieReducer
})