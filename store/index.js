import { configureStore } from '@reduxjs/toolkit';

import animeSlice from './anime-slice';
import uiSlice from './ui-slice';

const store = configureStore({
    reducer: {
        // reducerName: reducerPointerVariable.reducer;
        anime: animeSlice.reducer,
        ui: uiSlice.reducer,
    }
});

export default store;
