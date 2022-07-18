import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, Image, ScrollView, ImageBackground } from 'react-native'


import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Axios from "axios"

import Colorsmanager from '../collections/Colorsmanager';
import LogoTitle from '../components/LOGINPAGE/LogoTitle';
import ApiAddress from '../components/ApiTrigger/ApiAddress';


export default function EventScreen({ navigation }) {

    const [eventdata, setEventData] = useState([])

    //setter use state to change che component
    const [eventname, setEventName] = useState('')
    const [eventlocation, seteventlocation] = useState('')
    const [eventdatetime, setEventDataTime] = useState('')


    useEffect(() => {
        try {
            Axios.get(`${ApiAddress.httpaddress}/api/get/events`)
                .then((response) => {

                    setEventData(response.data)
                    setEventName(response.data[0].eventtitle)
                    seteventlocation(response.data[0].eventlocation)
                    setEventDataTime(response.data[0].eventdatetime)

                })
        }
        catch (err) {
            console.log(err)

        }

    }, [])




    const handleselction = (title, location, dateTime) => {

        setEventName(title)
        seteventlocation(location)
        setEventDataTime(dateTime)
    }

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



                <View style={{

                    width: "98%",
                    alignSelf: "center",
                    backgroundColor: Colorsmanager.blanksilver,
                    borderTopRightRadius: 5,
                    borderTopLeftRadius: 20,
                    margin: 5,
                    height: 250

                }}>
                    <ImageBackground
                        resizeMode='cover'
                        style={{
                            width: "100%",
                            height: "100%",
                            borderTopLeftRadius: 20,
                            borderTopRightRadius: 5,
                            justifyContent: "space-between",
                            flexDirection: "row"
                        }}
                        source={require('../assets/announcementitem/three.png')}
                    >

                        <View style={{ height: "100%", justifyContent: "flex-end", padding: 7, width: "50%", bottom: "2%" }}>
                            <Text style={{ fontWeight: "bold", fontSize: 27, color: Colorsmanager.primary }}>EVENT </Text>
                            <Text style={{ fontWeight: "bold", fontSize: 15, color: Colorsmanager.primary }}>{eventname}</Text>
                        </View>
                        <View style={{
                            height: "100%",
                            justifyContent: "flex-end",
                            paddingLeft: 7, width: "50%",
                            left: "5%", bottom: "6%",

                        }}>
                            <Text style={{ fontWeight: "bold", fontSize: 15, color: Colorsmanager.primary }}>{eventlocation} </Text>
                            <Text style={{ fontSize: 15, color: Colorsmanager.primary }}>{eventdatetime}</Text>
                        </View>


                    </ImageBackground>

                </View>
                {/* ---------------------------------- */}
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    style={{

                        width: "95%",
                        alignSelf: "center",
                        backgroundColor: Colorsmanager.primary,
                        borderTopRightRadius: 5,
                        borderTopLeftRadius: 20,
                        margin: 5,


                    }}>

                    {eventdata?.map((val, index) => {
                        return (
                            <TouchableOpacity
                                onPress={() => handleselction(val.eventtitle, val.eventlocation, val.eventdatetime)}
                                key={index}
                                style={{ flexDirection: "row", backgroundColor: Colorsmanager.blanksilver, justifyContent: "space-between", margin: 3 }}>

                                <Image
                                    style={{
                                        width: 100,
                                        height: 90,
                                        margin: 5,
                                        borderTopRightRadius: 10
                                    }}
                                    source={require('../assets/announcementitem/two.png')}
                                />
                                <View style={{
                                    width: "90%",
                                    backgroundColor: Colorsmanager.secondary,
                                    flexWrap: "wrap",
                                    paddingLeft: "2%"
                                }}>

                                    <Text style={{
                                        color: Colorsmanager.primary,
                                        fontSize: 15,
                                        fontWeight: "bold",
                                        width: "80%",
                                        textAlign: "left",
                                        flexWrap: "wrap"
                                    }}
                                    >{val.eventtitle}</Text>
                                    <View style={{ flexDirection: "row" }}>
                                        <Text style={{ color: Colorsmanager.bluish }} >Dhura bazar faat</Text>
                                        <Text style={{
                                            paddingLeft
                                                : 10, color: Colorsmanager.bluish
                                        }}>july 25 10 pm</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )
                    })}

                    {/* <TouchableOpacity style={{ flexDirection: "row", backgroundColor: Colorsmanager.blanksilver, justifyContent: "space-between" }}>

                        <Image
                            style={{ width: 100, height: 100, margin: 5, borderTopRightRadius: 10 }}
                            source={require('../assets/announcementitem/two.png')}
                        />
                        <View style={{ width: "80%", backgroundColor: Colorsmanager.redhightlights, flexWrap: "wrap", paddingLeft: "2%" }}>

                            <Text style={{ fontSize: 15, fontWeight: "bold", width: "80%", textAlign: "justify", flexWrap: "wrap" }}>Name of the event here  dshlfjdslkfjldskjf lsdkjfoisd foids  lfdsjflksdj fldsflkdsjfolsdk lk</Text>
                            <Text >Dhura bazar faat</Text>
                            <Text style={{
                                paddingLeft
                                    : 10
                            }}>july 25 10 pm</Text>
                        </View>
                    </TouchableOpacity> */}



                </ScrollView>



            </View>
        </View >
    )
}

