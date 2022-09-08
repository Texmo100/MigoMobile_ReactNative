import React from 'react';

const AppContext = React.createContext({
    animeWatchList: [],
    nextAnimeList: [],
    searchTerm: "",
    location: "",
    isLoading: true,
    onSearchHandler: (searchParam) => {},
    onLocationHandler: (locationName) => {},
    onAddAnime: async (type, anime) => {},
    onUpdateAnime: async (type, animeRef, anime) => {},
    onDeleteAnime: async (type, animeRef) => {},
});

export default AppContext;
