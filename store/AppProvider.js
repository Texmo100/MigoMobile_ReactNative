import React, { useReducer, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AppContext from './AppContext';
import animeWatchList from '../data/animeWatchList';
import nextAnimeList from '../data/nextAnimeList';

const initialState = {
    animeWatchList: animeWatchList,
    nextAnimeList: nextAnimeList,
    locationPage: "",
    searchTerm: "",
    statusFilter: "",
    orderFilter01: "",
    orderFilter02: "",
    isSidebarShown: false,
    isSideActionShown: false,
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'LOCATION':
            const newLocation = action.value;
            return { ...state, locationPage: newLocation };
        case 'SEARCH':
            const newSearchTerm = action.value;
            return { ...state, searchTerm: newSearchTerm };
        case 'STATUSFILTER':
            const newStatusFilter = action.value;
            return { ...state, statusFilter: newStatusFilter };
        case 'ORDERFILTER01':
            const newOrderFilter01 = action.value;
            return { ...state, orderFilter01: newOrderFilter01 };
        case 'ORDERFILTER02':
            const newOrderFilter02 = action.value;
            return { ...state, orderFilter02: newOrderFilter02 };
        case 'FILTERANIME':
            const newFilteredAnimeList = action.value;
            return { ...state, animeWatchList: newFilteredAnimeList };
        case 'FILTERNEXTANIME':
            const newFilteredNextAnimeList = action.value;
            return { ...state, nextAnimeList: newFilteredNextAnimeList };
        case 'SIDEBAR':
            const newSidebarValue = action.value;
            return { ...state, isSidebarShown: newSidebarValue };
        case 'SIDEACTION':
            const newSideActionValue = action.value;
            return { ...state, isSideActionShown: newSideActionValue };
        case 'ADDANIME':
            const updatedAnimeList = action.value;
            return { ...state, animeWatchList: updatedAnimeList };
        default:
            return state;
    };
}

const AppProvider = props => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const {
        locationPage,
        searchTerm,
        statusFilter,
        orderFilter01,
        orderFilter02,
        isSidebarShown,
        isSideActionShown,
    } = state;

    const location = useLocation();

    useEffect(() => {
        let currentLocation = location.pathname.toString();
        locationHandler(currentLocation.toLowerCase());
    }, [location]);

    useEffect(() => {
        if (locationPage === "/animewatchlist") {
            const cloneAnimeList = [...initialState.animeWatchList];
            const newAnimeList = [...cloneAnimeList].filter(anime => animeSearcher(anime.title.toLowerCase(), searchTerm.toLowerCase()));
            dispatch({ type: 'FILTERANIME', value: newAnimeList });
        }

        if (locationPage === "/nextanimeslist") {
            const cloneNextAnimeList = [...initialState.nextAnimeList];
            const newNextAnimeList = [...cloneNextAnimeList].filter(animeTitle => animeSearcher(animeTitle.toLowerCase(), searchTerm.toLowerCase()));
            dispatch({ type: 'FILTERNEXTANIME', value: newNextAnimeList });
        }
    }, [locationPage, searchTerm]);

    useEffect(() => {
        if (locationPage === "/animewatchlist") {
            const cloneAnimeList = [...initialState.animeWatchList];
            const filteredAnimeList = statusFilter ? [...cloneAnimeList].filter(anime => anime.status.toLowerCase() === statusFilter.toLowerCase()) : cloneAnimeList;
            if (orderFilter01) {
                if (orderFilter01 === 'title') {
                    const orderedAnimeList = animeSorter('byTitle', filteredAnimeList);
                    dispatch({ type: 'FILTERANIME', value: orderedAnimeList });
                }
                if (orderFilter01 === 'score') {
                    const orderedAnimeList = animeSorter('byScore', filteredAnimeList);
                    dispatch({ type: 'FILTERANIME', value: orderedAnimeList });
                }
            } else {
                dispatch({ type: 'FILTERANIME', value: filteredAnimeList });
            }
        }

        if (locationPage === "/nextanimeslist") {
            const cloneNextAnimeList = [...initialState.nextAnimeList];
            if (orderFilter02) {
                const newNextAnimeList = orderFilter02 === 'ascending' ? [...cloneNextAnimeList].sort() : [...cloneNextAnimeList].sort().reverse();
                dispatch({ type: 'FILTERNEXTANIME', value: newNextAnimeList });
            } else {
                dispatch({ type: 'FILTERNEXTANIME', value: cloneNextAnimeList });
            }
        }
    }, [locationPage, statusFilter, orderFilter01, orderFilter02]);

    useEffect(() => {
        if (isSidebarShown || isSideActionShown) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'visible';
        }
    }, [isSidebarShown, isSideActionShown]);

    const animeSearcher = (animeTitle, param) => {
        if (animeTitle.includes(param)) {
            return true;
        }
        return false;
    }

    const animeSorter = (type, animeList) => {
        if (type === 'byTitle') {
            const newOrderedAnimeList = [...animeList].sort((animeA, animeB) => {
                if (animeA.title < animeB.title) {
                    return -1;
                }

                if (animeA.title > animeB.title) {
                    return 1;
                }

                return 0;
            });
            return newOrderedAnimeList;
        }

        if (type === 'byScore') {
            const newOrderedAnimeList = animeList.sort((animeA, animeB) => animeA.score - animeB.score);
            return newOrderedAnimeList;
        }
    }

    const locationHandler = locationPath => {
        dispatch({ type: 'LOCATION', value: locationPath });
    }

    const onSearchHandler = searchParam => {
        dispatch({ type: 'SEARCH', value: searchParam });
    }

    const onSelectHandler = (type, filterParam) => {
        if (type === 'status') {
            dispatch({ type: 'STATUSFILTER', value: filterParam });
        }

        if (type === 'order01') {
            dispatch({ type: 'ORDERFILTER01', value: filterParam });
        }

        if (type === 'order02') {
            dispatch({ type: 'ORDERFILTER02', value: filterParam });
        }
    }

    const onSidebarHandler = sign => {
        if (sign === 'open') {
            dispatch({ type: 'SIDEBAR', value: true });
        }

        if (sign === 'close') {
            dispatch({ type: 'SIDEBAR', value: false });
        }
    }

    const onSideActionHandler = sign => {
        if (sign === 'open') {
            dispatch({ type: 'SIDEACTION', value: true });
        }

        if (sign === 'close') {
            dispatch({ type: 'SIDEACTION', value: false });
        }
    }

    const onAddAnime = (type, anime) => {
        if (type === 'anime') {
            const newAnimeList = [...initialState.animeWatchList];
            newAnimeList.push(anime);
            dispatch({ type: 'ADDANIME', value: newAnimeList });
            console.log(newAnimeList);
        }

        if (type === 'nextAnime') {
            dispatch({ type: 'ADDNEXTANIME', value: anime });
        }
    }

    const migoContext = {
        animeWatchList: state.animeWatchList,
        nextAnimeList: state.nextAnimeList,
        locationPage: state.locationPage,
        searchTerm: state.searchTerm,
        statusFilter: state.statusFilter,
        orderFilter01: state.orderFilter01,
        orderFilter02: state.orderFilter02,
        isSidebarShown: state.isSidebarShown,
        isSideActionShown: state.isSideActionShown,
        onSearchHandler: onSearchHandler,
        onSelectHandler: onSelectHandler,
        onSidebarHandler: onSidebarHandler,
        onSideActionHandler: onSideActionHandler,
        onAddAnime: onAddAnime,
    };

    return (
        <AppContext.Provider value={migoContext}>
            {props.children}
        </AppContext.Provider>
    );
}

export default AppProvider;
