import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    rockets: [],
};

const rocketSlice = createSlice({
    name: 'rockets',
    initialState,
    reducers: {
        addRockets: (state, { payload }) => {
            state.rockets = payload;
        },
    },
});

export const {addRockets} = rocketSlice.actions;
export const getAllRockets = (state) => state.rockets.rockets
export default rocketSlice.reducer;