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

    const animesRef = firestore().collection('animes');
    const nextAnimesRef = firestore().collection('nextAnimes');

    useEffect(() => {
        return animesRef.onSnapshot((querySnapshot, error) => {
            if (error || !querySnapshot) {
                console.log(error);
            }

            const list = [];
            querySnapshot.forEach(doc => {
                list.push(doc.data());
            });

            dispatch({ type: 'ANIMEWATCHLIST', value: list });
        });
    }, []);

    useEffect(() => {
        return animesRef.onSnapshot((querySnapshot, error) => {
            if (error || !querySnapshot) {
                console.log(error);
            }

            const list = [];
            querySnapshot.forEach(doc => {
                list.push(doc.data());
            });

            const newAnimeList = [...list].filter(anime => animeSearcher(anime.title.toLowerCase(), searchTerm));

            dispatch({ type: 'ANIMEWATCHLIST', value: newAnimeList });
        });
    }, [searchTerm]);

    const animeSearcher = (animeTitle, objective) => animeTitle.includes(objective) ? true : false;

    const onSearchHandler = searchParam => {
        dispatch({ type: 'SEARCH', value: searchParam });
    };

    const onAddAnime = async (anime) => {
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
