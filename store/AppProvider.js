import React, { useReducer, useEffect } from 'react';
import AppContext from './AppContext';
import animeWatchList from '../data/animeWatchList';
import nextAnimeList from '../data/nextAnimeList';

const initialState = {
    animeWatchList: animeWatchList,
    nextAnimeList: nextAnimeList,
    searchTerm: "",
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'SEARCH':
            const newSearchTerm = action.value;
            return { ...state, searchTerm: newSearchTerm };
        case 'SEARCHANIME':
            const newAnimeList = action.value;
            return { ...state, animeWatchList: newAnimeList };
        default:
            return state;
    };
};

const AppProvider = props => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const { searchTerm } = state;

    useEffect(() => {
        const animeCloneList = [...initialState.animeWatchList];
        const newAnimeList = [...animeCloneList].filter(anime => animeSearcher(anime.title.toLowerCase(), searchTerm));
        dispatch({ type: 'SEARCHANIME', value: newAnimeList });
    }, [searchTerm]);

    const animeSearcher = (animeTitle, objective) => animeTitle.includes(objective) ? true : false;

    const onSearchHandler = searchParam => {
        dispatch({ type: 'SEARCH', value: searchParam });
    };

    const migoContext = {
        animeWatchList: state.animeWatchList,
        nextAnimeList: state.nextAnimeList,
        searchTerm: state.searchTerm,
        onSearchHandler: onSearchHandler,
    };

    return (
        <AppContext.Provider value={migoContext}>
            {props.children}
        </AppContext.Provider>
    );
};

export default AppProvider;
