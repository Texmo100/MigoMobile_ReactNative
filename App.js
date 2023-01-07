import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './store/index';

import MigoDrawer from './components/UI/MigoDrawer/MigoDrawer';
import AnimeList from './components/pages/AnimeList/AnimeList';

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
    <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName='AnimeWatchList' screenOptions={generalScreenOptions} drawerContent={MigoDrawer}>
          <Drawer.Screen name="AnimeWatchList" options={{ headerTitle: 'Anime Watch List', drawerLabel: 'Anime Watch List' }}>
            {() => <AnimeList listType="animes" />}
          </Drawer.Screen>

          <Drawer.Screen name="NextAnimeList" options={{ headerTitle: 'Next Anime List', drawerLabel: 'Next Anime List' }}>
            {() => <AnimeList listType="nextAnimes" />}
          </Drawer.Screen>
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
