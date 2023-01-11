import { createSlice } from "@reduxjs/toolkit";

const uiInitialState = {
    searchTerm: '',
    location: '',
    isLoading: true
};

const uiSlice = createSlice({
    name: 'ui',
    initialState: uiInitialState,
    reducers: {
        cleanUpSearchTerm(state) {
            state.searchTerm = '';
        },
        setSearchTerm(state, action) {
            state.searchTerm = action.payload;
        },
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
