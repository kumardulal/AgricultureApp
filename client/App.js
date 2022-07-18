
import 'react-native-gesture-handler';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './app/screens/LoginScreen';
import RegistrationScreen from './app/screens/RegistrationScreen';
import HomeScreen from './app/screens/HomeScreens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNav from './app/components/NavigationsRout/DrawerNav';
import RegScreen from './app/screens/RegScreen';
import RegScreen2 from './app/components/RegistrationPage/RegScreen2';
import NewsScreen from './app/screens/HomeScreens/NewsScreen';
import NewsDetailsScreen from './app/screens/NewsDetailsScreen';
import MessageScreen from './app/screens/MessageScreen';
import AnnouncementScreen from './app/screens/HomeScreens/AnnouncementScreen';
import EventScreen from './app/screens/EventScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator

        screenOptions={{
          headerShown: false
        }} >
        <Stack.Screen name="DrawerNav" component={DrawerNav} />
        <Stack.Screen name="RegScreen2" component={RegScreen2} />
        <Stack.Screen name="RegScreen" component={RegScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="NewsScreen" component={NewsScreen} />
        <Stack.Screen name="RegistrationScreen" component={RegistrationScreen} />
        <Stack.Screen name="NewsDetailsScreen" component={NewsDetailsScreen} />
        <Stack.Screen name="MessageScreen" component={MessageScreen} />
        <Stack.Screen name="AnnouncementScreen" component={AnnouncementScreen} />
        <Stack.Screen name="EventScreen" component={EventScreen} />

      </Stack.Navigator>
    </NavigationContainer >
  );
}


