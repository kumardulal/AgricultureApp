import React from 'react';
import { View, Text, Linking, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import Colorsmanager from '../../collections/Colorsmanager';
import { Feather } from '@expo/vector-icons';


const Footer = () => {
    return (
        <View
            style={{
                height: 60,
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-around",
                backgroundColor: Colorsmanager.blanksilver,
                alignItems: 'center'
            }}
        >
            <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com/profile.php?id=100066935273701')}>
                <FontAwesome name="facebook-square" size={35} color="#3D92E2" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL('https://www.youtube.com/c/KrishiTelevisionHD1')}>
                <Feather name="youtube" size={35} color="red" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL('https://molmac.madhesh.gov.np/#/home')}>
                <MaterialCommunityIcons name="web" size={35} color="green" />
            </TouchableOpacity>



        </View>
    );
}

export default Footer;
