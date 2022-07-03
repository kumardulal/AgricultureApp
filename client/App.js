
import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './app/screens/LoginScreen';
import RegistrationScreen from './app/screens/RegistrationScreen';
import HomeScreen from './app/screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }} >
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegistrationScreen" component={RegistrationScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer >
  );
}


