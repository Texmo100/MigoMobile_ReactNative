import React, { useReducer, useEffect } from 'react';
import firestore from '@react-native-firebase/firestore';
import AppContext from './AppContext';

const initialState = {
    animeWatchList: [],
    nextAnimeList: [],
    searchTerm: "",
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'ANIMEWATCHLIST':
            const newAnimeList = action.value;
            return { ...state, animeWatchList: newAnimeList };
        case 'SEARCH':
            const newSearchTerm = action.value;
            return { ...state, searchTerm: newSearchTerm };
        default:
            return state;
    };
};

const AppProvider = props => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const { searchTerm } = state;

    const ref = firestore().collection('animes');

    useEffect(() => {
        return ref.onSnapshot((querySnapshot, error) => {
            if(error || !querySnapshot) {
                console.log(error);
            }

            const list = [];
            querySnapshot.forEach(doc => {
                const {
                    title,
                    episodes,
                    seasons,
                    genres,
                    status,
                    score,
                    description,
                    personalComments,

                } = doc.data();

                list.push({
                    id: doc.id,
                    title,
                    episodes,
                    seasons,
                    genres,
                    status,
                    score,
                    description,
                    personalComments,
                });
            });

            dispatch({ type: 'ANIMEWATCHLIST', value: list });
        });

    }, []);

    // useEffect(() => {
    //     const animeCloneList = [...initialState.animeWatchList];
    //     const newAnimeList = [...animeCloneList].filter(anime => animeSearcher(anime.title.toLowerCase(), searchTerm));
    //     dispatch({ type: 'SEARCHANIME', value: newAnimeList });
    // }, [searchTerm]);

    // const animeSearcher = (animeTitle, objective) => animeTitle.includes(objective) ? true : false;

    const onSearchHandler = searchParam => {
        dispatch({ type: 'SEARCH', value: searchParam });
    };

    const onAddAnime = async(anime) => {
        await ref.add(anime);
    };

    const migoContext = {
        animeWatchList: state.animeWatchList,
        nextAnimeList: state.nextAnimeList,
        searchTerm: state.searchTerm,
        onSearchHandler: onSearchHandler,
        onAddAnime: onAddAnime
    };

    return (
        <AppContext.Provider value={migoContext}>
            {props.children}
        </AppContext.Provider>
    );
};

export default AppProvider;
