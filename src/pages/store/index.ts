import {  createStore, combineReducers,applyMiddleware } from "redux";

import {  userReducer } from "./user";

import thunk from 'redux-thunk'

import { actionLog } from "./middlewares"

// 用于合并多个reducer
const rootReducer = combineReducers({
    user: userReducer
})

const store = createStore(rootReducer,applyMiddleware(thunk, actionLog));

export type RootState = ReturnType<typeof store.getState>;

export default store;
