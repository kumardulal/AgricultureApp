import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import Colorsmanager from '../../collections/Colorsmanager'



export default function Coverbox() {
    return (
        <View style={styles.coverboxCont}>


            <Image
                resizeMode='contain'

                style={{ width: "100%", height: 150 }}
                source={require("../../assets/map.png")}
            />





        </View>
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
