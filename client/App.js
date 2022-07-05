
import 'react-native-gesture-handler';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './app/screens/LoginScreen';
import RegistrationScreen from './app/screens/RegistrationScreen';
import HomeScreen from './app/screens/HomeScreens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNav from './app/components/NavigationsRout/DrawerNav';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }} >

        <Stack.Screen name="DrawerNav" component={DrawerNav} />

        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="RegistrationScreen" component={RegistrationScreen} />

      </Stack.Navigator>
    </NavigationContainer >
  );
}


