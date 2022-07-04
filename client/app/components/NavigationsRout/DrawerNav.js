// import 'react-native-gesture-handler';
// import React from 'react'
// import { View, Text } from 'react-native'

// export default function HomeScreen() {
//     return (
//         <View style={{ width: "100%", height: "100%", justifyContent: "center", alignItems: "center" }}><Text>HomeScreen</Text></View>
//     )
// }


import * as React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../../screens/HomeScreens/HomeScreen';
import Colorsmanager from '../../collections/Colorsmanager';

import NewsScreen from '../../screens/HomeScreens/NewsScreen';
import PublicationScreen from '../../screens/HomeScreens/PublicationScreen';
import GalleryScreen from '../../screens/HomeScreens/GalleryScreen';
import AboutUs from '../../screens/HomeScreens/AboutUsScreen';


const Drawer = createDrawerNavigator();

function DrawerNav() {

    return (

        <Drawer.Navigator
            // useLegacyImplementation help u to prevent error related to version and babel plugin
            useLegacyImplementation={true}
            screenOptions={{
                drawerStyle: {

                    backgroundColor: Colorsmanager.secondary,
                    width: 240,
                    headerShown: false,

                },

            }}



        >
            <Drawer.Screen
                //home
                name="News Feed" component={HomeScreen}

                options={{
                    drawerLabel: "News Feed",
                    headerShown: false

                }}
            />
            < Drawer.Screen
                //News
                name="news" component={NewsScreen}
                options={{
                    drawerLabel: "समाचार",
                    headerShown: false
                }}
            />
            < Drawer.Screen
                //gallery
                name="Gallery"
                component={GalleryScreen}
                options={{
                    drawerLabel: 'ग्यालेरी',
                    headerShown: false
                }} />

            < Drawer.Screen
                //publication
                name="Publication"
                component={PublicationScreen}
                options={{
                    drawerLabel: 'प्रकाशन',
                    headerShown: false
                }}

            />
            < Drawer.Screen
                //publication
                name="About US"
                component={AboutUs}
                options={{
                    drawerLabel: 'AboutUs',
                    headerShown: false
                }}

            />
        </Drawer.Navigator >

    );
}

export default DrawerNav;



