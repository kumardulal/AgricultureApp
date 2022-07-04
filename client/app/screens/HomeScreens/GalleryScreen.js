import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import Colorsmanager from '../../collections/Colorsmanager';

import GalleryItems from '../../components/HomeComponents/GalleryItems';
import HeaderItem from '../../components/HomeComponents/HeaderItem';

export default function GalleryScreen({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
            <HeaderItem />
            <Text style={{ fontSize: 25, textAlign: "center", right: 10, bottom: 5 }}>Gallery</Text>
            <ScrollView style={{ width: "100%", height: "100%", backgroundColor: Colorsmanager.blanksilver }}>
                <GalleryItems />
            </ScrollView>

        </View>
    );
}