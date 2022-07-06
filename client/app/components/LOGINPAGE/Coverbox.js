import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import Colorsmanager from '../../collections/Colorsmanager'



export default function Coverbox() {
    return (
        <View style={styles.coverboxCont}>
            <View>
                <Image
                    resizeMode='center'
                    style={{ width: 100, height: 100 }}

                    source={require("../../assets/logotypes/flagholding.png")}
                />
            </View>

            <Image
                style={{ width: 120, height: 120 }}
                source={require("../../assets/logotypes/tractor.png")}
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
        justifyContent: "center"


    },
})
