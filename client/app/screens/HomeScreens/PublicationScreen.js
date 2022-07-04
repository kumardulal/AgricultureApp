import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import Colorsmanager from '../../collections/Colorsmanager';
import HeaderItem from '../../components/HomeComponents/HeaderItem';
import PublicationItems from '../../components/HomeComponents/PublicationItems';

export default function PublicationScreen({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
            <HeaderItem />
            <Text style={{ fontWeight: "bold", fontSize: 25, textAlign: "center", right: 10, bottom: 5 }}>
                प्रकाशन</Text>
            <ScrollView style={{ width: "100%", height: "100%", backgroundColor: Colorsmanager.blanksilver }}>
                <PublicationItems />
            </ScrollView>

        </View>
    );
}