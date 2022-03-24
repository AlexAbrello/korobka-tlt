import { applyMiddleware, combineReducers, createStore } from "redux";
import { resultReducer } from "./resultReducer";
import thunkMiddleware from 'redux-thunk'

let reducers = combineReducers({
   result: resultReducer
})

export let store = createStore(reducers, applyMiddleware(thunkMiddleware))