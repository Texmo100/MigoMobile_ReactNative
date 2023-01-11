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
            const { animeListType, animeList } = action.payload;

            switch(animeListType) {
                case 'animes':
                    state.animeWatchList = animeList;
                    break;
                case 'nextAnimes':
                    state.nextAnimeList = animeList;
                    break;
            }
        },
        addAnime(state, action) {
            const { animeType, anime } = action.payload;

            switch(animeType) {
                case 'anime':
                    state.animeWatchList.push(anime);
                    break;
                case 'nextAnime':
                    state.nextAnimeList.push(anime);
                    break;
            }
        },
        deleteAnime(state, action) {
            const { animeType, id } = action.payload;

            switch(animeType) {
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
