import React from 'react';

const AppContext = React.createContext({
    animeWatchList: [],
    nextAnimeList: [],
    searchTerm: "",
    location: "",
    onSearchHandler: (searchParam) => {},
    onLocationHandler: (locationName) => {},
    onAddAnime: async (type, anime) => {}
});

export default AppContext;
