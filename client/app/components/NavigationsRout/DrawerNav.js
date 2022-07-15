// import 'react-native-gesture-handler';
// import React from 'react'
// import { View, Text } from 'react-native'

// export default function HomeScreen() {
//     return (
//         <View style={{ width: "100%", height: "100%", justifyContent: "center", alignItems: "center" }}><Text>HomeScreen</Text></View>
//     )
// }


import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
// import { AsyncStorage } from 'react-native'

import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../../screens/HomeScreens/HomeScreen';
import Colorsmanager from '../../collections/Colorsmanager';

import NewsScreen from '../../screens/HomeScreens/NewsScreen';
import PublicationScreen from '../../screens/HomeScreens/PublicationScreen';
import GalleryScreen from '../../screens/HomeScreens/GalleryScreen';
import AboutUs from '../../screens/HomeScreens/AboutUsScreen';


const Drawer = createDrawerNavigator();

function DrawerNav({ route, navigation }) {
    const data = route.params?.data
    console.log(data)



    // AsyncStorage - logic needed  more
    // if (route.params.data) {
    //     var data = route.params?.data
    //     save;
    // }
    // else if (usercredentials) {
    //     remove;

    // }

    // const [usercredentials, setUserCredentials] = useState(data)

    // const save = async () => {

    //     try {
    //         await AsyncStorage.setItem("token", usercredentials)
    //         console.log("user credebtial saved")
    //     }
    //     catch (err) {
    //         alert(err)
    //     }

    // }


    // const load = async () => {
    //     try {
    //         let userdata = await AsyncStorage.getItem("token")
    //         if (token != null) {
    //             console.log("hello user is loaded from storage")
    //             //set(username, password, active status)
    //             setUserCredentials(userdata)

    //         }
    //     }
    //     catch (err) {
    //         alert(err)
    //     }
    // }


    // const remove = async () => {
    //     try {
    //         await AsyncStorage.removeItem("token")
    //     }
    //     catch (err) {
    //         alert(err)
    //     }
    //     finally {
    //         // set user credintials
    //         setuserCredentials("")

    //     }
    // }




    return (

        <Drawer.Navigator
            initialRouteName="HomeScreen"


            // useLegacyImplementation help u to prevent error related to version and babel plugin
            useLegacyImplementation={true}
            screenOptions={{
                drawerStyle: {

                    backgroundColor: Colorsmanager.blanksilver,
                    width: 240,
                    headerShown: false,

                },

            }}



        >
            <Drawer.Screen

                //home reference link : https://reactnavigation.org/docs/params/
                name="Home" component={HomeScreen}
                initialParams={data}

                options={{
                    drawerLabel: "होम",
                    headerShown: false,

                }}

            />
            < Drawer.Screen
                //News
                name="news" component={NewsScreen}
                initialParams={data}
                options={{
                    drawerLabel: "समाचार",
                    headerShown: false
                }}
            />
            < Drawer.Screen
                //gallery
                name="Gallery"
                component={GalleryScreen}
                initialParams={data}
                options={{
                    drawerLabel: 'ग्यालेरी',
                    headerShown: false
                }} />

            < Drawer.Screen
                //publication
                name="Publication"
                initialParams={data}
                component={PublicationScreen}
                options={{
                    drawerLabel: 'प्रकाशन',
                    headerShown: false
                }}

            />
            < Drawer.Screen
                //publication
                name="About US"
                initialParams={data}
                component={AboutUs}
                options={{
                    drawerLabel: 'हाम्रोबारे',
                    headerShown: false
                }}

            />
        </Drawer.Navigator >

    );
}

export default DrawerNav;



