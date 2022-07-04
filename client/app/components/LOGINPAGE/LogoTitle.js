import React from 'react'
import { View, Text, StyleSheet, Image, SafeAreaView, TouchableOpacity } from 'react-native'




export default function LogoTitle() {

    return (
        <TouchableOpacity

            style={styles.titlecontainer} >
            <View style={{
                height: 63,
                width: 83,
                top: "13%"
            }}>
                <Image
                    resizeMode="contain"
                    style={{ width: 55, height: 70 }}
                    source={(require("../../assets/icon.png"))} />
            </View>

            <View style={{
                height: 63,
                marginRight: 1,
                top: "12%",
                alignItems: "center",
                justifyContent: "center",

                right: "40%"
            }}>
                <Text style={{
                    fontWeight: 'bold',
                    fontSize: 17,


                }}>AGRICULTURE NEPAL</Text>
            </View>
        </TouchableOpacity >
    )
}
const styles = StyleSheet.create({


    titlecontainer: {


        justifyContent: "flex-start",
        alignItems: "flex-start",
        flexDirection: "row"


    },



})
