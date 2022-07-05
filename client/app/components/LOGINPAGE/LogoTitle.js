import React from 'react'
import { View, Text, StyleSheet, Image, SafeAreaView, TouchableOpacity } from 'react-native'




export default function LogoTitle() {

    return (
        <TouchableOpacity

            style={styles.titlecontainer} >
            <View style={{
                height: 63,
                width: 50,
                top: "7%",

            }}>
                <Image
                    resizeMode="contain"
                    style={{ width: 55, height: 70 }}
                    source={(require("../../assets/icon.png"))} />
            </View>

            <View style={{
                height: 63,
                marginRight: 2,

                alignItems: "center",
                justifyContent: "center",
                top: "7%",


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
