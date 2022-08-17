import React from 'react';

const AppContext = React.createContext({
    animeWatchList: [],
    nextAnimeList: [],
    searchTerm: "",
    onSearchHandler: (searchParam) => {},
    onAddAnime: (type, anime) => {}
});

export default AppContext;
