import React from 'react'
import { View, Text, Pressable, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'
import LogoTitle from '../../components/LOGINPAGE/LogoTitle';
import { MaterialIcons } from '@expo/vector-icons';
import HeaderItem from '../../components/HomeComponents/HeaderItem';
import WeatherForeCast from '../../components/HomeComponents/WeatherForeCast';
import FunctionalityItems from '../../components/HomeComponents/FunctionalityItems';
import { ScrollView } from 'react-native-gesture-handler';
import NewsItems from '../../components/HomeComponents/NewsItems';

export default function HomeScreen({ navigation }) {

    return (
        <SafeAreaView style={{ flex: 1, width: "100%", alignSelf: "center", }}>
            <HeaderItem navigation={navigation} />

            <WeatherForeCast />
            <View style={{ marginTop: "1%" }}>
                <FunctionalityItems />
            </View>
            <ScrollView>
                <NewsItems />
            </ScrollView>



        </SafeAreaView >
    );
}
const styles = StyleSheet.create({
    headericons: {


        flexDirection: "row",
        width: "100%",
        height: 125,
        alignItems: "center"

    }
})