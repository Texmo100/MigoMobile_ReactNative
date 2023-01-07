import { createSlice } from "@reduxjs/toolkit";

const animeInitialState = {
    animeWatchList: [],
    nextAnimeList: [],
};

const animeSlice = createSlice({
    name: 'anime',
    initialState: animeInitialState,
    reducers: {
        getAnimeList(state, action) {
            const { type, animeList } = action.payload;

            switch(type) {
                case 'anime':
                    state.animeWatchList = animeList;
                    break;
                case 'nextAnime':
                    state.nextAnimeList = animeList;
                    break;
            }
        },
        addAnime(state, action) {
            const { type, anime } = action.payload;

            switch(type) {
                case 'anime':
                    state.animeWatchList.push(anime);
                    break;
                case 'nextAnime':
                    state.nextAnimeList.push(anime);
                    break;
            }
        },
        deleteAnime(state, action) {
            const { type, id } = action.payload;

            switch(type) {
                case 'anime':
                    state.animeWatchList = state.animeWatchList.filter(anime => anime.id !== id);
                    break;
                case 'nextAnime':
                    state.nextAnimeList = state.nextAnimeList.filter(anime => anime.id !== id);
                    break;
            }
        },
    }
});

export const animeActions = animeSlice.actions;

export default animeSlice;
