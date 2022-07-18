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
    const [announcementdata, setAnnouncementData] = useState()

    useEffect(() => {
        try {
            Axios.get(`${ApiAddress.httpaddress}/api/get/announcements`)
                .then((response) => {

                    setAnnouncementData(response.data)
                })
        }
        catch (err) {
            console.log(err)

        }


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
                <Text style={{ textAlign: "center", fontSize: 25, height: 40, fontWeight: "bold" }}>
                    घोषणा</Text>



                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    {/* ///items listing startd here */}
                    <>
                        {announcementdata?.map((val, index) => {
                            return (
                                < TouchableOpacity key={index}>
                                    <MaterialIcons name="announcement" size={24} color="black" />
                                    <Image
                                        source={require('../../assets/newsImage/news3.png')} style={{ width: "98%", height: 159, alignSelf: "center", opacity: 0.9 }} />
                                    <View style={{
                                        height: 60,
                                        width: "98%",
                                        alignSelf: "center",
                                        backgroundColor: Colorsmanager.blanksilver,
                                        justifyContent: "center"
                                    }}>
                                        <Text style={{ textAlign: "center", fontSize: 17, fontWeight: "bold", color: "black" }}>{val.atitle}</Text>

                                    </View>
                                </TouchableOpacity>
                            )
                        })}
                        {/* ...put the mapping ciode here */}
                    </>

                </ScrollView>

            </View>
        </View >
    )
}

