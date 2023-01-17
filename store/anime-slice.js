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
        updateAnime(state, action) {
            const { animeType, animeRef, animeData } = action.payload;

            switch(animeType) {
                case 'anime':
                    const newAnimeList = [...state.animeWatchList].map(anime => anime.docRef === animeRef ? anime = {...animeData} : anime);
                    state.animeWatchList = newAnimeList;
                    break;
                case 'nextAnime':
                    const newNextAnimeList = [...state.nextAnimeList].map(anime => anime.docRef === animeRef ? anime = {...animeData} : anime);
                    state.nextAnimeList = newNextAnimeList;
                    break;
            }
        },
        deleteAnime(state, action) {
            const { animeType, animeRef } = action.payload;

            switch(animeType) {
                case 'anime':
                    state.animeWatchList = state.animeWatchList.filter(anime => anime.docRef !== animeRef);
                    break;
                case 'nextAnime':
                    state.nextAnimeList = state.nextAnimeList.filter(anime => anime.docRef !== animeRef);
                    break;
            }
        },
    }
});

export const animeActions = animeSlice.actions;

export default animeSlice;
