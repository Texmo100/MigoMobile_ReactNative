import { createSlice } from "@reduxjs/toolkit";

const uiInitialState = {
    location: '',
    isLoading: true
};

const uiSlice = createSlice({
    name: 'ui',
    initialState: uiInitialState,
    reducers: {
        setLocation(state, action) {
            state.location = action.payload;
        },
        setIsLoading(state) {
            state.isLoading = true;
        },
        setIsNotLoading(state) {
            state.isLoading = false;
        },
    }
});

export const uiActions = uiSlice.actions;

export default uiSlice;
