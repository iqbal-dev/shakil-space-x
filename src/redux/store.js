import { configureStore } from "@reduxjs/toolkit";
import rocketsReducer from './rocketSlice';

export const store = configureStore({
    reducer: rocketsReducer,
});