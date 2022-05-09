import {  createStore, applyMiddleware, AnyAction } from "redux";
import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { combineReducers, configureStore } from "@reduxjs/toolkit";

import {  userReducer } from "./user";
import { actionLog } from "./middlewares";
import { productorDetailSlice } from "./product"

// 用于合并多个reducer
const rootReducer = combineReducers({
    user: userReducer,
    product: productorDetailSlice.reducer
})

// const store = createStore(rootReducer,applyMiddleware(thunk, actionLog));
const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware)=>[...getDefaultMiddleware(), actionLog],
    devTools: true
})
export type RootState = ReturnType<typeof store.getState>;
export type ReduxState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export type TypedDispatch = ThunkDispatch<ReduxState, any, AnyAction>;
export type TypedThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  ReduxState,
  unknown,
  AnyAction
>;
export default store;
