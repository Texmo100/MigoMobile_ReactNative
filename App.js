import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppProvider from './store/AppProvider';
import LoginSignup from './components/pages/LoginSignup/LoginSignup';
import Home from './components/pages/Home/Home';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <AppProvider>
        <Stack.Navigator initialRouteName="loginSignup" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="loginSignup" component={LoginSignup} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </AppProvider>
    </NavigationContainer>
  );
};

export default App;
