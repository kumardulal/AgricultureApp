import React, { useState, useEffect } from 'react'
import { View, Text, Pressable, SafeAreaView, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import HeaderItem from '../../components/HomeComponents/HeaderItem';
import WeatherForeCast from '../../components/HomeComponents/WeatherForeCast';
import FunctionalityItems from '../../components/HomeComponents/FunctionalityItems';

import NewsItems from '../../components/HomeComponents/NewsItems';
import HomeCover from '../../components/HomeComponents/HomeCover';
import GalleryCover from '../../components/HomeComponents/GalleryCover';
import ProfileModal from '../../components/modals/ProfileModal';
import Footer from '../../components/HomeComponents/Footer';

export default function HomeScreen({ navigation, userdata }) {
    // const data = route.params?.data
    const [modalDisplay, setModalDisplay] = useState(styles.modaloff)
    const [loginstatetext, setLoginStateText] = useState("दर्ता/लग - इन")



    return (
        <SafeAreaView style={{ flex: 1, width: "100%", alignSelf: "center", }}>
            <HeaderItem navigation={navigation} />

            <HomeCover setModalDisplay={setModalDisplay} userdata={userdata} loginstatetext={loginstatetext} setLoginStateText={setLoginStateText} />
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
                    <View style={modalDisplay}>
                        <ProfileModal setModalDisplay={setModalDisplay} userdata={userdata} loginstatetext={loginstatetext} />
                    </View>

                    <GalleryCover />
                </ScrollView>



                <FunctionalityItems navigation={navigation} userdata={userdata} />
                <Footer />
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

    },
    modalOn: {
        // position: "fixed",
        height: 200,
        width: 150,


        flex: 1,
        borderTopRightRadius: 10
    },
    modaloff: {
        display: "none"
    }
})