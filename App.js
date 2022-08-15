import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import NextAnimeList from './components/pages/NextAnimeList/NextAnimeList';
import AnimeWatchList from './components/pages/AnimeWatchList/AnimeWatchList';

const Drawer = createDrawerNavigator();

const generalScreenOptions = {
  headerStyle: { backgroundColor: '#000000' },
  headerTintColor: '#e8e8e8',
  drawerType: 'slide',
  drawerStyle: {
    backgroundColor: '#e8e8e8',
  },
};

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='AnimeWatchList' screenOptions={generalScreenOptions}>
        <Drawer.Screen
          name="AnimeWatchList"
          component={AnimeWatchList}
          options={{
            headerTitle: 'Anime Watch List',
            drawerLabel: 'Anime Watch List'
          }}
        />
        <Drawer.Screen
          name="NextAnimeList"
          component={NextAnimeList}
          options={{
            headerTitle: 'Next Anime List',
            drawerLabel: 'Next Anime List'
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
