import React, { useState, useEffect } from 'react'

import LogoTitle from '../components/LOGINPAGE/LogoTitle'
import { View, Text, TouchableOpacity, Image, StyleSheet, TextInput } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colorsmanager from '../collections/Colorsmanager';
import Axios from 'axios';
import ApiAddress from '../components/ApiTrigger/ApiAddress';
import DateTimeCurrent from '../components/Engines/DateTimeCurrent';

export default function MessageScreen({ navigation, route }) {
    const userdata = route.params?.userdata
    const [usermessage, setUserMessage] = useState("")
    const [defaultmessagevalue, setDefaultMessageValue] = useState(null)
    const [sendbtntext, setsendBtnText] = useState("पठाउनुहोस्")

    useEffect(() => {
        setDefaultMessageValue(usermessage)
        if (userdata == undefined) {
            setsendBtnText("पहिले लगइन गर्नुहोस्")
        }
    }, [usermessage]);




    const handleSendPress = () => {
        if (sendbtntext === "पठाउनुहोस्") {

            Axios.post(`${ApiAddress.httpaddress}/api/post/sendmessage`, {
                userid: userdata.userid,
                messagedatetime: DateTimeCurrent,
                usermessage: usermessage
            }).then((response) => {
                setDefaultMessageValue(null)
                alert("message posted")

            }).catch((err) => {
                console.log(err)
            })
        }
        else {
            navigation.navigate("LoginScreen")
        }



    }
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
            <View style={{
                backgroundColor: Colorsmanager.primary,
                width: "98%",
                alignSelf: "center",
                height: 50,
                justifyContent: "center",

            }}>

                <Text style={{

                    textAlign: "center",
                    fontSize: 25,
                    fontWeight: "bold",


                }}>सन्देश</Text>
            </View>

            <View
                style={{
                    marginTop: "5%",
                    height: 250,
                    width: "90%",
                    backgroundColor: Colorsmanager.primary,
                    alignSelf: "center",
                    borderRadius: 10
                }}>



                <TextInput
                    onChangeText={setUserMessage}
                    defaultValue={defaultmessagevalue}
                    multiline
                    placeholder='                           हामीलाई सन्देश लेख्नुहोस्'
                    style={{

                        height: "100%",
                        width: "95%",
                        backgroundColor: Colorsmanager.primary,
                        alignSelf: "center",


                    }} />



            </View>

            <TouchableOpacity

                onPress={() => handleSendPress()}
                style={{
                    marginTop: "5%",
                    width: 150,
                    height: 42,
                    backgroundColor: Colorsmanager.secondary,
                    alignSelf: "center",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 10

                }}>
                <Text style={{ fontSize: 15 }}>{sendbtntext}</Text></TouchableOpacity>
        </SafeAreaView>
    )
}
