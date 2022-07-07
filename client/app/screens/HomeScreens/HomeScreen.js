import React from 'react'
import { View, Text, Pressable, SafeAreaView, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import HeaderItem from '../../components/HomeComponents/HeaderItem';
import WeatherForeCast from '../../components/HomeComponents/WeatherForeCast';
import FunctionalityItems from '../../components/HomeComponents/FunctionalityItems';

import NewsItems from '../../components/HomeComponents/NewsItems';
import HomeCover from '../../components/HomeComponents/HomeCover';
import GalleryCover from '../../components/HomeComponents/GalleryCover';

export default function HomeScreen({ navigation }) {

    return (
        <SafeAreaView style={{ flex: 1, width: "100%", alignSelf: "center", }}>
            <HeaderItem navigation={navigation} />

            <HomeCover />
            {/* <WeatherForeCast /> */}
            {/* <View style={{ marginTop: "1%" }}>
                <FunctionalityItems />
            </View> */}
            <ScrollView
                showsHorizontalScrollIndicator={false}
            >
                <ScrollView
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                // style={{ backgroundColor: "green" }} 
                >
                    {/* <NewsItems /> */}

                    <GalleryCover />
                </ScrollView>


                <FunctionalityItems />
            </ScrollView>



        </SafeAreaView >
    );
}
const styles = StyleSheet.create({
    headericons: {

        flexDirection: "row",
        width: "100%",
        height: 200,
        alignItems: "center",

    }
})