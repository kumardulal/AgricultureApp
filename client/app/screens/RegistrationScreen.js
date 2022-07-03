import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, Image, ImageBackground, SafeAreaView, TouchableOpacity } from 'react-native'
import Colorsmanager from '../collections/Colorsmanager'

import LogoTitle from '../components/LOGINPAGE/LogoTitle'
import { MaterialIcons } from '@expo/vector-icons';
import Form from '../components/RegistrationPage/Form'
import { Ionicons } from '@expo/vector-icons';
import { absoluteFill } from 'react-native-extended-stylesheet';

export default function RegistrationScreen({ navigation }) {
    // const [fullname, setFullName] = useState('')
    // const [phonenumber, setPhoneNumber] = useState('')
    // const [fulladdress, setFullAddress] = useState('')
    // const [usertype, setUserType] = useState('')
    // const [userfield, setUserField] = useState('')
    // const [userbio, setUserBio] = useState('')


    return (
        <SafeAreaView
            style={{ flex: 1, backgroundColor: Colorsmanager.secondary, position: "relative" }}  >
            <View style={{ flexDirection: "row" }}>

                <TouchableOpacity
                    onPress={() => navigation.navigate("LoginScreen")}
                    style={{ top: "10%", color: "black" }}>
                    <Ionicons style={{ opacity: 0.8 }} name="md-arrow-back-outline" size={40} />
                </TouchableOpacity>
                <LogoTitle />
            </View>



            <View style={{
                width: "100%",
                height: 80,
                backgroundColor: Colorsmanager.bluish,

                justifyContent: "center",
                alignItems: "center",
                opacity: 0.8,
                flexDirection: "row",
                alignItems: "center",
                marginTop: "25%"


            }}>
                <MaterialIcons
                    style={{ margin: 10 }}
                    name="app-registration" size={30} color={Colorsmanager.primary} />
                <Text style={{ fontSize: 20, textAlign: "center", color: Colorsmanager.primary }}>REGISTRATION</Text>
            </View>
            <Image
                style={{ height: "25%", width: "40%", top: "4%", position: "absolute", alignSelf: "flex-end" }}
                resizeMode="center"
                source={(require("../assets/logotypes/tractor.png"))}
            />





            {/* form component here */}
            <View style={{ width: "100%", alignItems: "center", marginTop: "5%", flex: 1 }}>
                <Form />

            </View>



        </SafeAreaView >
    )
}
