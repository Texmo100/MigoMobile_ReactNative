import React from 'react';

const AppContext = React.createContext({
    animeWatchList: [],
    nextAnimeList: [],
    locationPage: "",
    searchTerm: "",
    statusFilter: "",
    orderFilter01: "",
    orderFilter02: "",
    isSidebarShown: false,
    isSideActionShown: false,
    onSearchHandler: (searchParam) => {},
    onSelectHandler: (type, filterParam) => {},
    onSidebarHandler: (sign) => {},
    onSideActionHandler: (sign) => {},
    onAddAnime: (type, anime) => {}
});

export default AppContext;
