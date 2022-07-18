import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import Colorsmanager from '../../collections/Colorsmanager'
import LogoTitle from '../../components/LOGINPAGE/LogoTitle'
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Axios from "axios"
import ApiAddress from '../../components/ApiTrigger/ApiAddress';


export default function AnnouncementScreen({ navigation, route }) {
    const userdata = route.params?.userdata
    console.log(userdata)
    const [announcementdata, setAnnouncementData] = useState()

    useEffect(() => {
        Axios.get(`${ApiAddress.httpaddress}/api/get/announcements`)
            .then((response) => {

                console.log(response.data)
            })

    }, [])

    return (
        <View style={{
            flex: 1,
            alignItems: "center",
            height: "100%",
            width: "100%",
            backgroundColor: Colorsmanager.blanksilver
        }}>
            <View style={{ flexDirection: "row", alignItems: "center", top: 15, width: "100%", left: 10 }}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >
                    <Text style={{ top: '15%' }}>
                        <Ionicons name="arrow-back-circle-outline" size={40} color="black" />
                    </Text>
                </TouchableOpacity>

                <LogoTitle />
            </View>


            <View style={
                {
                    height: "85%",
                    width: "100%",
                    backgroundColor: Colorsmanager.primary,
                    marginTop: 16
                }}>
                <Text style={{ textAlign: "center", fontSize: 25, height: 40 }}>Announcement</Text>



                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    {/* ///items listing startd here */}


                    {/* ...put the mapping ciode here */}
                    <MaterialIcons name="announcement" size={24} color="black" />
                    <Image
                        source={require('../../assets/newsImage/news1.png')} style={{ width: "98%", height: 159, alignSelf: "center" }} />
                    <View style={{ height: 50, width: "98%", alignSelf: "center", backgroundColor: Colorsmanager.blanksilver }}>
                        <Text style={{ textAlign: "justify", }}>DESCRIOBE ABOUT THE ANNUNCEMNET. THIS DESCRIPTION IS   fosd jfoids IN SHORT FORM </Text>
                    </View>

                </ScrollView>

            </View>
        </View >
    )
}

