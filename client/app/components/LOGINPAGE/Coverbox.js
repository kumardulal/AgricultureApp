import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import Colorsmanager from '../../collections/Colorsmanager'



export default function Coverbox() {
    return (
        <View style={styles.coverboxCont}>
            <View style={{ height: 200, width: "45%", backgroundColor: "white" }}>
                {/* flag holding image set */}
                <Image
                    resizeMode="cover"
                    style={{
                        height: "100%",
                        width: "100%",
                        backgroundColor: Colorsmanager.blanksilver,



                    }}
                    source={(require('../../assets/logotypes/flagholding.png'))} />
            </View>

            {/* tractor  image set */}
            <View style={{ height: 200, width: "55%", right: "20%", top: 25 }}>
                <Image
                    style={{
                        width: "100%",
                        height: "100%",


                    }}
                    source={(require('../../assets/logotypes/tractor.png'))} />

            </View>




        </View>
    )
}
const styles = StyleSheet.create({
    coverboxCont:
    {
        flex: -1,
        height: 200,
        width: "100%",
        // backgroundColor: "red",
        marginTop: 40,
        alignItems: "flex-start",
        justifyContent: "flex-end",
        flexDirection: "row",
        position: "relative"
    },
})
