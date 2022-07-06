import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, Image, ImageBackground, SafeAreaView, TouchableOpacity } from 'react-native'
import Colorsmanager from '../collections/Colorsmanager'

import LogoTitle from '../components/LOGINPAGE/LogoTitle'
import { MaterialIcons } from '@expo/vector-icons';
import Form from '../components/RegistrationPage/Form'
import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';


export default function RegistrationScreen({ navigation }) {



    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: Colorsmanager.secondary,
                justifyContent: "center",




            }}  >
            <View style={{ flexDirection: "row" }}>

                <TouchableOpacity
                    onPress={() => navigation.navigate("LoginScreen")}
                    style={{ top: "7%", color: "black", marginLeft: 6 }}>
                    <Ionicons style={{ opacity: 0.8 }} name="md-arrow-back-outline" size={37} />
                </TouchableOpacity>
                <LogoTitle />
            </View>



            <View style={{

                width: "100%",
                height: 60,
                justifyContent: "center",
                alignItems: "center",
                opacity: 0.8,


            }}>
                <View style={{
                    width: "100%",
                    height: 50,
                    backgroundColor: Colorsmanager.bluish,

                    justifyContent: "center",
                    alignItems: "center",
                    opacity: 0.8,
                    flexDirection: "row",
                    alignItems: "center",
                }}>
                    <MaterialIcons
                        style={{ margin: 10 }}
                        name="app-registration" size={30} color={Colorsmanager.primary} />
                    <Text style={{ fontSize: 20, textAlign: "center", color: Colorsmanager.primary }}>REGISTRATION</Text>

                </View>


            </View>

            {/* form component here */}

            <ScrollView

                showsVerticalScrollIndicator={false}
            >
                <Form />
            </ScrollView>




        </SafeAreaView >
    )
}
