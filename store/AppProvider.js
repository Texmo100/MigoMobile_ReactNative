import React, { useState ,useReducer, useEffect } from 'react';
import firestore from '@react-native-firebase/firestore';
import AppContext from './AppContext';

const initialState = {
    animeWatchList: [],
    nextAnimeList: [],
    searchTerm: "",
    location: "",
    isLoading: true,
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'ANIMEWATCHLIST':
            const newAnimeList = action.value;
            return { ...state, animeWatchList: newAnimeList };
        case 'NEXTANIMELIST':
            const newNextAnimeList = action.value;
            return { ...state, nextAnimeList: newNextAnimeList };
        case 'SEARCH':
            const newSearchTerm = action.value;
            return { ...state, searchTerm: newSearchTerm };
        case 'LOCATION':
            const newLocation = action.value;
            return { ...state, location: newLocation };
        default:
            return state;
    };
};

const AppProvider = props => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [isLoading, setIsLoading] = useState(true);

    const { searchTerm, location } = state;

    const animesRef = firestore().collection('animes');
    const nextAnimesRef = firestore().collection('nextAnimes');

    useEffect(() => {
        if(location === 'animes') {
            return animesRef.onSnapshot((querySnapshot, error) => {
                if (error || !querySnapshot) {
                    console.log(error);
                }
    
                const list = [];
                querySnapshot.forEach(doc => {
                    list.push({...doc.data(), docRef: doc.id});
                });
    
                dispatch({ type: 'ANIMEWATCHLIST', value: list });

                if(isLoading) {
                    setIsLoading(false);
                }
            });
        } else if(location === 'nextAnimes') {
            return nextAnimesRef.onSnapshot((querySnapshot, error) => {
                if (error || !querySnapshot) {
                    console.log(error);
                }
    
                const list = [];
                querySnapshot.forEach(doc => {
                    list.push({...doc.data(), docRef: doc.id});
                });
    
                dispatch({ type: 'NEXTANIMELIST', value: list });

                if(isLoading) {
                    setIsLoading(false);
                }
            });
        }
    }, [location]);

    useEffect(() => {
        if(location === 'animes') {
            return animesRef.onSnapshot((querySnapshot, error) => {
                if (error || !querySnapshot) {
                    console.log(error);
                }
    
                const list = [];
                querySnapshot.forEach(doc => {
                    list.push({...doc.data(), docRef: doc.id});
                });
    
                const newAnimeList = [...list].filter(anime => animeSearcher(anime.title.toLowerCase(), searchTerm));
    
                dispatch({ type: 'ANIMEWATCHLIST', value: newAnimeList });
            });
        } else if(location === 'nextAnimes') {
            return nextAnimesRef.onSnapshot((querySnapshot, error) => {
                if (error || !querySnapshot) {
                    console.log(error);
                }
    
                const list = [];
                querySnapshot.forEach(doc => {
                    list.push({...doc.data(), docRef: doc.id});
                });
    
                const newAnimeList = [...list].filter(anime => animeSearcher(anime.title.toLowerCase(), searchTerm));
    
                dispatch({ type: 'NEXTANIMELIST', value: newAnimeList });
            });
        }
    }, [searchTerm, location]);

    const animeSearcher = (animeTitle, objective) => animeTitle.includes(objective) ? true : false;

    const onSearchHandler = searchParam => {
        dispatch({ type: 'SEARCH', value: searchParam });
    };

    const onLocationHandler = locationName => {
        dispatch({ type: 'LOCATION', value: locationName });
    };

    const onAddAnime = async (type, anime) => {
        switch(type) {
            case 'anime':
                await animesRef.add(anime);
                break;
            case 'nextAnime':
                await nextAnimesRef.add(anime);
                break;
        }
    };

    const onUpdateAnime = async (type, animeRef, anime) => {
        switch(type) {
            case 'anime':
                await animesRef.doc(animeRef).update(anime);
                break;
            case 'nextAnime':
                await nextAnimesRef.doc(animeRef).update(anime);
                break;
        }
    };

    const onDeleteAnime = async (type, animeRef) => {
        switch(type) {
            case 'anime':
                await animesRef.doc(animeRef).delete();
                break;
            case 'nextAnime':
                await nextAnimesRef.doc(animeRef).delete();
                break;
        }
    };

    const migoContext = {
        animeWatchList: state.animeWatchList,
        nextAnimeList: state.nextAnimeList,
        searchTerm: state.searchTerm,
        isLoading: isLoading,
        onSearchHandler: onSearchHandler,
        onLocationHandler: onLocationHandler,
        onAddAnime: onAddAnime,
        onUpdateAnime: onUpdateAnime,
        onDeleteAnime: onDeleteAnime,
    };

    return (
        <AppContext.Provider value={migoContext}>
            {props.children}
        </AppContext.Provider>
    );
};

export default AppProvider;
