import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../../screens/HomeScreen';
import LoginScreen from '../../screens/LoginScreen';
import AmusementParkScreen from '../../screens/AmusementParkScreen';

export type RootStackParamList = {
  AmusementPark: undefined;
  Home: undefined;
  Login: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const NavigationRouter = () => {
  return (
      <Stack.Navigator
      
      screenOptions={{
        headerTintColor: '#fff',
        headerStyle: { backgroundColor: '#03508C' },
      }}
      >
        <Stack.Screen name="AmusementPark" component={AmusementParkScreen} options={{ title: 'Amusement Park' }} />
        {/* <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} /> */}
      </Stack.Navigator>
  );
};

export default NavigationRouter;