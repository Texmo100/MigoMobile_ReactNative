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
});

export default AppContext;
