import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import MigoDrawer from '../../UI/MigoDrawer/MigoDrawer';
import AnimeList from '../../pages/AnimeList/AnimeList';

const Drawer = createDrawerNavigator();

const generalScreenOptions = {
    headerStyle: { backgroundColor: '#000000' },
    headerTintColor: '#e8e8e8',
    drawerType: 'slide',
    drawerStyle: {
        backgroundColor: '#e8e8e8',
    },
};

const Home = () => {
    return (
        <Drawer.Navigator initialRouteName='AnimeWatchList' screenOptions={generalScreenOptions} drawerContent={MigoDrawer}>
            <Drawer.Screen name="AnimeWatchList" options={{ headerTitle: 'Anime Watch List', drawerLabel: 'Anime Watch List' }}>
                {() => <AnimeList listType="animes" />}
            </Drawer.Screen>

            <Drawer.Screen name="NextAnimeList" options={{ headerTitle: 'Next Anime List', drawerLabel: 'Next Anime List' }}>
                {() => <AnimeList listType="nextAnimes" />}
            </Drawer.Screen>
        </Drawer.Navigator>
    );
};

export default Home;
