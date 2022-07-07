import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, SafeAreaView, TouchableOpacity } from 'react-native'
import DateTimeCurrent from '../Engines/DateTimeCurrent'
import NepaliDate from 'nepali-date-converter'



export default function LogoTitle() {

    console.log(DateTimeCurrent)



    return (
        <TouchableOpacity

            style={styles.titlecontainer} >
            <View style={{
                height: 70,
                width: 45,
                top: "6%",
            }}>
                <Image
                    resizeMode="contain"
                    style={{ width: 45, height: 70 }}
                    source={(require("../../assets/icon.png"))} />

            </View>

            <View style={{
                height: 63,
                top: "5%",

                alignItems: "center",
                justifyContent: "center",




            }}>
                <Text style={{
                    fontWeight: 'bold',
                    fontSize: 20,

                }}>

                    {DateTimeCurrent}
                </Text>

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
