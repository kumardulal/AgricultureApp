import React from 'react'

import LogoTitle from '../components/LOGINPAGE/LogoTitle'
import { View, Text, TouchableOpacity, Image, StyleSheet, TextInput } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colorsmanager from '../collections/Colorsmanager';

export default function MessageScreen({ navigation }) {
    return (
        <SafeAreaView style={{
            height: "100%",
            backgroundColor: Colorsmanager.blanksilver,

        }} >

            <View style={{ flexDirection: "row" }}>
                {/* go back button */}
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >
                    <Ionicons name="arrow-back-circle-outline" size={40} color="black" /></TouchableOpacity>
                <View style={{ height: 20, justifyContent: "center", alignItems: "flex-start" }}>
                    <LogoTitle navigation={navigation} />

                </View>

            </View>
            <View
                style={{
                    marginTop: "10%",
                    height: 200,
                    width: "98%",
                    backgroundColor: Colorsmanager.primary,
                    alignSelf: "center"
                }}>

                <TextInput
                    multiline
                    placeholder='write your message'
                    style={{

                        height: "100%",
                        width: "98%",
                        backgroundColor: Colorsmanager.primary,
                        alignSelf: "center",

                    }} />



            </View>

            <TouchableOpacity style={{
                marginTop: "5%",
                width: 150,
                height: 42,
                backgroundColor: "green",
                alignSelf: "center",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 10

            }}>
                <Text style={{ fontSize: 15 }}>SEND</Text></TouchableOpacity>
        </SafeAreaView>
    )
}
