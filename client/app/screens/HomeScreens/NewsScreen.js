import React from 'react'
import { View, Text, Pressable, TextInput } from 'react-native'
import HeaderItem from '../../components/HomeComponents/HeaderItem';
import { useNavigation } from '@react-navigation/native';
import NewsItems from '../../components/HomeComponents/NewsItems';
import Colorsmanager from '../../collections/Colorsmanager';
export default function NewsScreen() {
    const navigation = useNavigation()
    return (
        <View style={{ flex: 1 }}>
            <HeaderItem />
            <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                <Text style={{ fontSize: 10 }}>News</Text>
                <TextInput
                    style={{
                        width: "80%",
                        backgroundColor: Colorsmanager.primary,
                        textAlign: "center",
                        height: 40,
                        borderWidth: 1,
                        alignSelf: "center",
                        margin: 10
                    }}
                    placeholder='Search for news'

                />
            </View>
            <NewsItems />
        </View>
    );
}