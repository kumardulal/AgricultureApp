import React from 'react'
import { View, Text, StyleSheet, Image, SafeAreaView } from 'react-native'
import Colorsmanager from '../../collections/Colorsmanager'



export default function LogoTitle() {
    return (
        <View style={styles.titlecontainer}>
            <View style={{
                height: 63,
                width: 83,
                top: "13%"
            }}>
                <Image
                    resizeMode="contain"
                    style={{ width: 80, height: 70 }}
                    source={(require("../../assets/icon.png"))} />
            </View>

            <View style={{
                height: 63,
                marginRight: 1,
                top: "12%",
                alignItems: "center",
                justifyContent: "center"
            }}>
                <Text style={{
                    fontWeight: 'bold',
                    fontSize: 16,




                }}>AGRICULTURE NEPAL</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({


    titlecontainer: {


        justifyContent: "flex-start",
        alignItems: "flex-start",
        flexDirection: "row"


    },



})
