import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { SimpleLineIcons } from '@expo/vector-icons';
import LogoTitle from '../LOGINPAGE/LogoTitle';
import Colorsmanager from '../../collections/Colorsmanager';



export default function HeaderItem() {
    const navigation = useNavigation()
    return (
        <View style={{

            justifyContent: "center",
            alignItems: "center",
            flex: -1,


        }}>

            < View style={styles.headericons} >

                <TouchableOpacity

                    onPress={() => navigation.openDrawer()}

                >
                    <Text style={{ paddingRight: 10, paddingLeft: 10, top: "12%", }}>
                        <SimpleLineIcons name="menu" size={35} color="black" />
                    </Text>
                </TouchableOpacity>
                <View style={{
                    height: 100, flexDirection: "row", alignItems: "center",

                    marginRight: "8%",
                    width: "84%",

                    justifyContent: "space-between"
                }}>
                    <LogoTitle navigation={navigation} />


                    {/* login button HERE */}
                    {/* <TouchableOpacity

                        onPress={() => navigation.navigate("LoginScreen")}
                        style={{
                            width: 70,
                            height: 27,
                            backgroundColor: Colorsmanager.redhightlights,
                            alignItems: "center",
                            borderRadius: 7,
                            top: "5%",
                            justifyContent: "center",
                            margin: 6,
                            opacity: 0.8,


                        }}>

                        <Text style={{
                            fontWeight: "bold",
                            fontSize: 13,
                            textAlign: "center",
                            color: Colorsmanager.primary
                        }}>LOGIN</Text>
                    </TouchableOpacity> */}


                </View>
            </View>



        </ View >
    );
}
const styles = StyleSheet.create({
    headericons: {


        flexDirection: "row",
        width: "100%",
        height: 110,
        alignItems: "center",
        backgroundColor: Colorsmanager.secondary,
        opacity: 0.9,








    }
})