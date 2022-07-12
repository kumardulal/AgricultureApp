import React from 'react'
import { View, Text, StyleSheet, Image, SafeAreaView } from 'react-native'
import Colorsmanager from '../../collections/Colorsmanager'



export default function Coverbox() {
    return (
        <SafeAreaView style={styles.coverboxCont}>


            <Image
                resizeMode='stretch'

                style={{ width: "100%", height: "100%" }}
                source={require("../../assets/map.png")}
            />





        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    coverboxCont:
    {
        flex: 1,
        width: "100%",
        flexDirection: "row",
        justifyContent: "center",
        top: "5%"


    },
})
