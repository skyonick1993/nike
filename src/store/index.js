import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import productReducer from "./reducers/productReducer";

const rootReducer = combineReducers({ productReducer });

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export default store;
